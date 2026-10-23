import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8nxiccfx.css';
import '../../css/a/a_fok6klj.css';
import '../../css/p/pgliny47l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="q8nxiccfx"/><path class="a_fok6klj"/><path class="pgliny47l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fish-symbol"} {...others} />);
}

export default Component;
