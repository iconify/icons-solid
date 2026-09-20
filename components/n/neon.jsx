import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5g3k2bqw.css';
import '../../css/e/ebw43bcld.css';
import '../../css/f/fihwksb4e.css';
import '../../css/e/ee8lmib0n.css';
import '../../css/i/irl5j4b-s.css';
import '../../css/i/iist3861k.css';
import '../../css/f/f2y-knbrn.css';
import '../../css/l/l65eldbqf.css';

const viewBox = {"width":256,"height":256};
const content = `<defs><linearGradient id="SVGZSjXdboi" x1="100%" x2="12.069%" y1="100%" y2="0%"><stop offset="0%" class="a5g3k2bqw"/><stop offset="100%" class="ebw43bcld"/></linearGradient><linearGradient id="SVGMxAgOWFr" x1="100%" x2="40.603%" y1="100%" y2="76.897%"><stop offset="0%" class="fihwksb4e"/><stop offset="100%" class="ee8lmib0n"/></linearGradient></defs><path class="irl5j4b-s"/><path fill="url(#SVGZSjXdboi)" class="iist3861k"/><path fill="url(#SVGMxAgOWFr)" class="f2y-knbrn"/><path class="l65eldbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:neon"} {...others} />);
}

export default Component;
