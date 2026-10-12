import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spkjwsbgk.css';
import '../../css/f/fr-v3dbag.css';
import '../../css/r/rbkzkvmvq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="spkjwsbgk"/><path class="fr-v3dbag"/><path class="rbkzkvmvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dna-20"} {...others} />);
}

export default Component;
