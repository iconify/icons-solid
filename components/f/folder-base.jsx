import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spajzybyt.css';
import '../../css/x/x9f5z-bmj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="spajzybyt"/><path class="x9f5z-bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-base"} {...others} />);
}

export default Component;
