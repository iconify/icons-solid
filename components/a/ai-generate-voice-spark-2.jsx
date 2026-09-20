import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/a/a828rf6ok.css';
import '../../css/n/ns6b357aj.css';
import '../../css/z/z4mmbd6lv.css';
import '../../css/l/l6qk5ab5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="a828rf6ok"/><path class="ns6b357aj"/><path class="z4mmbd6lv"/><path class="l6qk5ab5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-generate-voice-spark-2"} {...others} />);
}

export default Component;
