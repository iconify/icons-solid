import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_31tneyb.css';
import '../../css/p/p1ariqbgg.css';
import '../../css/s/sk8e-4p4u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z_31tneyb"/><path class="p1ariqbgg"/><path class="sk8e-4p4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-round-20"} {...others} />);
}

export default Component;
