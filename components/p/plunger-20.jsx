import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbyoeqbxo.css';
import '../../css/v/vp_3b7bmf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kbyoeqbxo"/><path class="vp_3b7bmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plunger-20"} {...others} />);
}

export default Component;
