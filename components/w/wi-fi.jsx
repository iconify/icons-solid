import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_u37-xcf.css';
import '../../css/y/yo49mknez.css';
import '../../css/r/rle6czgkf.css';
import '../../css/s/syv2-pb7c.css';
import '../../css/v/v4mn56bwm.css';
import '../../css/g/gau0-tb0m.css';
import '../../css/e/evmucoe2y.css';
import '../../css/e/e-yjsn5jv.css';
import '../../css/c/c3wqjyb8n.css';

const viewBox = {"width":100,"height":74};
const content = `<path class="l_u37-xcf"/><path class="yo49mknez"/><path class="rle6czgkf"/><path class="syv2-pb7c"/><path class="v4mn56bwm"/><path class="gau0-tb0m"/><path class="evmucoe2y"/><path class="e-yjsn5jv"/><path class="c3wqjyb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:wi-fi"} {...others} />);
}

export default Component;
