import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9ynxqbdc.css';
import '../../css/s/si8s1_bwz.css';
import '../../css/a/a6t8n_bir.css';
import '../../css/t/txm8t4b8e.css';
import '../../css/k/kpffwihmr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9ynxqbdc"/><path class="si8s1_bwz"/><path class="a6t8n_bir"/><path class="txm8t4b8e"/><path class="kpffwihmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flowise"} {...others} />);
}

export default Component;
