import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w3_67jbrf.css';
import '../../css/l/lyw-_rbph.css';
import '../../css/k/ko1dr6spr.css';
import '../../css/y/ys_8v2bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="w3_67jbrf"/><path class="lyw-_rbph"/><path class="ko1dr6spr"/><path class="ys_8v2bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:dna-light"} {...others} />);
}

export default Component;
