import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3mfcsb3n.css';
import '../../css/s/snd_4ib6h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z3mfcsb3n"/><path class="snd_4ib6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-key-48-bold"} {...others} />);
}

export default Component;
