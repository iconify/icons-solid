import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en4wdebxd.css';
import '../../css/f/fux_uqjfv.css';
import '../../css/i/i_ug-dbkl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="en4wdebxd"/><path class="fux_uqjfv"/><path class="i_ug-dbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:head-side-mask-bold"} {...others} />);
}

export default Component;
