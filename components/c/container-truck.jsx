import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q7twulyci.css';
import '../../css/b/bf9hqaclw.css';
import '../../css/e/ec_xsy4gs.css';
import '../../css/v/vp8fcsdcn.css';
import '../../css/z/z5-el507a.css';
import '../../css/b/bi512rpan.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q7twulyci"/><circle class="bf9hqaclw"/><circle class="ec_xsy4gs"/><path class="vp8fcsdcn"/><path class="z5-el507a"/><path class="bi512rpan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:container-truck"} {...others} />);
}

export default Component;
