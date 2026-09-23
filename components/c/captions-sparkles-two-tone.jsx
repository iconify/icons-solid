import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/osdiiebmw.css';
import '../../css/e/evefg0bda.css';
import '../../css/z/z6xmttbcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="osdiiebmw"/><path class="evefg0bda"/><path class="z6xmttbcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:captions-sparkles-two-tone"} {...others} />);
}

export default Component;
