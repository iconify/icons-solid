import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm2moacxj.css';
import '../../css/c/cr265u0om.css';
import '../../css/b/b732rrycy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm2moacxj"/><rect class="cr265u0om"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect class="b732rrycy"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"svg-spinners:clock"} {...others} />);
}

export default Component;
