import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wre_ujfoe.css';
import '../../css/d/d83gx6k1k.css';
import '../../css/y/ysvyobcvx.css';
import '../../css/n/nhi2tpaak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wre_ujfoe"/><path class="d83gx6k1k"/><ellipse transform="matrix(1 0 0 -1 6.43 9.88)" class="ysvyobcvx"/><path class="nhi2tpaak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:coins"} {...others} />);
}

export default Component;
