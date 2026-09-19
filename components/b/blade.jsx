import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r08uf-dum.css';
import '../../css/c/cfxr_rd5n.css';
import '../../css/v/v3miwabnt.css';
import '../../css/p/p8gjx6bgp.css';
import '../../css/j/jnj60ebkt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r08uf-dum"/><path class="cfxr_rd5n"/><circle class="v3miwabnt"/><path class="p8gjx6bgp"/><path class="jnj60ebkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:blade"} {...others} />);
}

export default Component;
