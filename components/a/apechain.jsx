import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgp891b0n.css';
import '../../css/k/kh5naitwa.css';
import '../../css/g/g1t4b6brm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGdTsR8dtt)"><path class="wgp891b0n"/><path class="kh5naitwa"/></g><defs><clipPath id="SVGdTsR8dtt"><path class="g1t4b6brm"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:apechain"} {...others} />);
}

export default Component;
