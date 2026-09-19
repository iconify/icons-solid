import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgyxfmoiw.css';
import '../../css/o/o85n1ubew.css';
import '../../css/t/t86sy23ae.css';
import '../../css/f/fglm7-byw.css';
import '../../css/q/qc-lnp6oe.css';
import '../../css/v/v5nuly0kc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cgyxfmoiw"/><path class="o85n1ubew"/><circle class="t86sy23ae"/><circle class="fglm7-byw"/><circle class="qc-lnp6oe"/><circle class="v5nuly0kc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:orange"} {...others} />);
}

export default Component;
