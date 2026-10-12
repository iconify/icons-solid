import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxbrj2n4c.css';
import '../../css/o/oi3o7hw2k.css';
import '../../css/a/at6qb9bes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dxbrj2n4c"/><path class="oi3o7hw2k"/><path class="at6qb9bes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:copyleft"} {...others} />);
}

export default Component;
