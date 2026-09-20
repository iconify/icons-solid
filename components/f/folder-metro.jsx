import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f95-ijf-n.css';
import '../../css/y/yedg67bmb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f95-ijf-n"/><path class="yedg67bmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-metro"} {...others} />);
}

export default Component;
