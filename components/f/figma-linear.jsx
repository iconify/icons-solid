import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gvhflea0d.css';
import '../../css/k/kq8vefznw.css';
import '../../css/p/pide31b3u.css';
import '../../css/q/qd7grabik.css';
import '../../css/h/hrnbbwbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gvhflea0d"/><path class="kq8vefznw"/><path class="pide31b3u"/><path class="qd7grabik"/><path class="hrnbbwbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:figma-linear"} {...others} />);
}

export default Component;
