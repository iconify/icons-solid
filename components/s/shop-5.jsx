import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co35akbjw.css';
import '../../css/q/qeed53eod.css';
import '../../css/s/sdt-pfbqk.css';
import '../../css/y/ylx4kdm0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="co35akbjw"/><path class="qeed53eod"/><path class="sdt-pfbqk"/><path class="ylx4kdm0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shop-5"} {...others} />);
}

export default Component;
