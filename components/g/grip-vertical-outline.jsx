import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mo-147opz.css';
import '../../css/j/jz-rb3dxa.css';
import '../../css/n/npgeuzbag.css';
import '../../css/p/ps5kto3no.css';
import '../../css/s/sq1holbsl.css';
import '../../css/k/kn5gso_lu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mo-147opz"/><path class="jz-rb3dxa"/><path class="npgeuzbag"/><path class="ps5kto3no"/><path class="sq1holbsl"/><path class="kn5gso_lu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-vertical-outline"} {...others} />);
}

export default Component;
