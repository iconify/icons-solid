import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p3i1n2byb.css';
import '../../css/u/u8r-p5byy.css';
import '../../css/a/anfjbcq9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p3i1n2byb"/><path class="u8r-p5byy"/><path class="anfjbcq9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:crypto-currency-bitcoin-network-globe"} {...others} />);
}

export default Component;
