import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2w3uac9z.css';
import '../../css/e/edv2k_o8i.css';
import '../../css/e/eqoo6tulb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="d2w3uac9z"/><path class="edv2k_o8i"/><path class="eqoo6tulb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dashing-away"} {...others} />);
}

export default Component;
