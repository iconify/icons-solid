import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y01ft5bnz.css';
import '../../css/l/l3cij_a6s.css';
import '../../css/e/e-rrf7u5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow y01ft5bnz"/><path class="l3cij_a6s wm-shadow"/><path class="e-rrf7u5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chinese-knot"} {...others} />);
}

export default Component;
