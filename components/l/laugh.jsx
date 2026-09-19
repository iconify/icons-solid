import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gvj669z4w.css';
import '../../css/z/z3exurbqq.css';
import '../../css/r/r6k04cbja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gvj669z4w"/><path class="z3exurbqq"/><circle class="r6k04cbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laugh"} {...others} />);
}

export default Component;
