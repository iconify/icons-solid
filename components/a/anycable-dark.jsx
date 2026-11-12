import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7a_3ibbh.css';
import '../../css/s/scd45hs3y.css';
import '../../css/c/cdw17kolu.css';
import '../../css/v/v9u8nhb5n.css';
import '../../css/x/x8rkn-b2l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k7a_3ibbh"/><path class="scd45hs3y"/><path class="cdw17kolu"/><linearGradient id="SVGijKgJbyo" x1="53.8" x2="458.2" y1="60.7" y2="60.7" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v9u8nhb5n"/></linearGradient><path fill="url(#SVGijKgJbyo)" class="x8rkn-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anycable-dark"} {...others} />);
}

export default Component;
