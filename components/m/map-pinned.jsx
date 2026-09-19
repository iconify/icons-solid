import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zqrrajf2c.css';
import '../../css/f/fjo6rmbxh.css';
import '../../css/g/gqchk_boi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zqrrajf2c"/><path class="fjo6rmbxh"/><path class="gqchk_boi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pinned"} {...others} />);
}

export default Component;
