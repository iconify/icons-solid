import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcb49wu3o.css';
import '../../css/f/ftfqnvhwn.css';
import '../../css/l/lz4wfsojb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wcb49wu3o"/><path class="ftfqnvhwn"/><path class="lz4wfsojb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crib-48-bold"} {...others} />);
}

export default Component;
