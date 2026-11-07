import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wp68rqjes.css';
import '../../css/d/d3o-c7zwo.css';
import '../../css/l/l1jur_bpp.css';
import '../../css/o/o-34giu1u.css';
import '../../css/q/q8mqojmpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wp68rqjes"/><path class="d3o-c7zwo"/><path class="l1jur_bpp"/><path class="o-34giu1u"/><path class="q8mqojmpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-broken"} {...others} />);
}

export default Component;
