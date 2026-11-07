import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpfnlu-qi.css';
import '../../css/k/kgek_1bkv.css';
import '../../css/p/pctlhgoqh.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpfnlu-qi"/><path class="kgek_1bkv"/><path clip-rule="evenodd" class="pctlhgoqh"/><path class="wm3j448rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-sliders-bold"} {...others} />);
}

export default Component;
