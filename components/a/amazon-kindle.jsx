import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow_1ol8gw.css';
import '../../css/c/c27sm6bel.css';
import '../../css/o/o3_oddivz.css';
import '../../css/j/j79e0y2ro.css';

const viewBox = {"width":388,"height":86};
const content = `<path clip-rule="evenodd" class="ow_1ol8gw"/><path clip-rule="evenodd" class="c27sm6bel"/><path clip-rule="evenodd" class="o3_oddivz"/><path class="j79e0y2ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:amazon-kindle"} {...others} />);
}

export default Component;
