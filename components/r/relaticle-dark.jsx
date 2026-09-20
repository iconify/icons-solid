import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bph7wduct.css';
import '../../css/a/a2u7q4nxu.css';
import '../../css/v/vjnt0fbaj.css';
import '../../css/m/m52v0xb7c.css';
import '../../css/z/z3-4c0wrc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bph7wduct"/><path class="a2u7q4nxu"/><path class="vjnt0fbaj"/><path class="m52v0xb7c"/><path class="z3-4c0wrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:relaticle-dark"} {...others} />);
}

export default Component;
