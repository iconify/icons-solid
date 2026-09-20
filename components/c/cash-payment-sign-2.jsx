import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os6irlrzm.css';
import '../../css/t/tpyflibyd.css';
import '../../css/s/sdlsj3-rz.css';
import '../../css/r/r1lxb1kvw.css';
import '../../css/d/dwkj67m4b.css';
import '../../css/p/pz6z8ccud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="os6irlrzm"/><path class="tpyflibyd"/><path class="sdlsj3-rz"/><path class="r1lxb1kvw"/><path class="dwkj67m4b"/><path class="pz6z8ccud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cash-payment-sign-2"} {...others} />);
}

export default Component;
