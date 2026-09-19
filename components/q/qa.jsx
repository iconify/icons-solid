import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdn3w-fqv.css';
import '../../css/w/wtbr_yb4p.css';

const viewBox = {"width":301,"height":119};
const content = `<g class="ft5dv1b6b"><path class="fdn3w-fqv"/><path class="wtbr_yb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:qa"} {...others} />);
}

export default Component;
