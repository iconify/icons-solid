import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/x/xfy0nnwjl.css';
import '../../css/f/fhy922bbx.css';
import '../../css/w/whvwt4bny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hq-5njbjh"/><path class="xfy0nnwjl"/><path class="fhy922bbx"/><path class="whvwt4bny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-lines-broken"} {...others} />);
}

export default Component;
