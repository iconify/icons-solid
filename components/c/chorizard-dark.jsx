import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_wo_pbay.css';
import '../../css/i/imad5bjrh.css';
import '../../css/x/xi-cb_bto.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_wo_pbay"/><path class="imad5bjrh"/><path class="xi-cb_bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chorizard-dark"} {...others} />);
}

export default Component;
