import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/j/jnakdhbal.css';
import '../../css/r/rf0doac_z.css';
import '../../css/a/al3ns2dam.css';
import '../../css/s/s2z3l6b3b.css';
import '../../css/t/t1taycc0q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="jnakdhbal"/><path class="rf0doac_z"/><circle class="al3ns2dam"/><circle class="s2z3l6b3b"/><circle class="t1taycc0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hold-seeds"} {...others} />);
}

export default Component;
