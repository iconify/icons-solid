import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kol7kqbto.css';
import '../../css/w/wmm3s4_zx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kol7kqbto"/><path class="wmm3s4_zx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:umbrella-duocolor-round"} {...others} />);
}

export default Component;
