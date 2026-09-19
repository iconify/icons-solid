import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdgac_b5a.css';
import '../../css/b/bf6u4_bha.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mdgac_b5a"/><path transform="scale(102.4 170.66667)" class="bf6u4_bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gb-sct-1x1"} {...others} />);
}

export default Component;
