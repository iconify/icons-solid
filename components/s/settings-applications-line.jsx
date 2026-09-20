import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-x7c5buw.css';
import '../../css/w/wm_k1-bsq.css';
import '../../css/u/ugujyjv5w.css';
import '../../css/x/xl6e-cvow.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)" class="o-x7c5buw"><path class="wm_k1-bsq"/><path class="ugujyjv5w"/><path class="xl6e-cvow"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:settings-applications-line"} {...others} />);
}

export default Component;
