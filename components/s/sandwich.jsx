import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sqqgvebkn.css';
import '../../css/v/v1fp2tbrr.css';
import '../../css/f/fck4l8bgi.css';
import '../../css/e/exee4vbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sqqgvebkn"/><path class="v1fp2tbrr"/><path class="fck4l8bgi"/><path class="exee4vbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sandwich"} {...others} />);
}

export default Component;
