import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fch2tybje.css';
import '../../css/c/cmm5cntcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fch2tybje"/><path class="cmm5cntcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drawing-mode"} {...others} />);
}

export default Component;
