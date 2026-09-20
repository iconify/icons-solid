import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds60olb_g.css';
import '../../css/n/nw_fw7zya.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ds60olb_g"/><path class="nw_fw7zya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rightwards-hand-medium-dark-skin-tone"} {...others} />);
}

export default Component;
