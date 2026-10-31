import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvwqut9aq.css';
import '../../css/g/gooa6pv_r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uvwqut9aq"/><path class="gooa6pv_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-swift"} {...others} />);
}

export default Component;
