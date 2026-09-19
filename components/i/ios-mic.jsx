import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb_3d7atl.css';
import '../../css/m/mtfesl_yh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mb_3d7atl"/><path class="mtfesl_yh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-mic"} {...others} />);
}

export default Component;
