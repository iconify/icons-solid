import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d60y3vbff.css';
import '../../css/z/zewb0mbil.css';
import '../../css/h/htlnml_qd.css';
import '../../css/h/h7c6g4lty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d60y3vbff"/><path class="zewb0mbil"/><path class="htlnml_qd"/><path class="h7c6g4lty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sophnet"} {...others} />);
}

export default Component;
