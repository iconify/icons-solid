import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvdil4_dr.css';
import '../../css/s/sr3pvp5-o.css';
import '../../css/f/f_qydnbny.css';
import '../../css/o/or4ccpv2i.css';
import '../../css/o/o2gi7kbtl.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/wx_5wc2ko.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVG3Lih0dZq" class="jvdil4_dr"/></defs><g class="sr3pvp5-o"><use href="#SVG3Lih0dZq" class="f_qydnbny"/><path class="or4ccpv2i"/><path class="o2gi7kbtl"/></g><g class="ij2x_72vy"><use href="#SVG3Lih0dZq"/><path class="wx_5wc2ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tornado"} {...others} />);
}

export default Component;
