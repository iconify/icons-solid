import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq_0qxfmx.css';
import '../../css/y/yu51uzbyf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zq_0qxfmx"/><path class="yu51uzbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:broken-link"} {...others} />);
}

export default Component;
