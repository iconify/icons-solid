import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w10xf1pso.css';
import '../../css/m/mw546i83n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w10xf1pso"/><path class="mw546i83n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tinfoil-dark"} {...others} />);
}

export default Component;
