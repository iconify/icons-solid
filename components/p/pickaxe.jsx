import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s1of7zb7j.css';
import '../../css/d/dinr75_iv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s1of7zb7j"/><path class="dinr75_iv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pickaxe"} {...others} />);
}

export default Component;
