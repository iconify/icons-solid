import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-c7f4bry.css';
import '../../css/t/tvqx1abby.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s-c7f4bry"/><path class="tvqx1abby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-stack"} {...others} />);
}

export default Component;
