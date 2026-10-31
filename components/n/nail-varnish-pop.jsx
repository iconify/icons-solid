import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/z/z1lyfs8lo.css';
import '../../css/j/jrpc1yvoz.css';
import '../../css/q/q-o9fjs9z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="z1lyfs8lo"/><path class="jrpc1yvoz"/><path class="q-o9fjs9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:nail-varnish-pop"} {...others} />);
}

export default Component;
