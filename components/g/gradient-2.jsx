import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vynhotbwi.css';
import '../../css/h/huf4j3asl.css';
import '../../css/l/li4hmzbxv.css';
import '../../css/q/q-xerac6b.css';
import '../../css/v/vl67z84yn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vynhotbwi"/><path class="huf4j3asl"/><path class="li4hmzbxv"/><path class="q-xerac6b"/><path class="vl67z84yn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gradient-2"} {...others} />);
}

export default Component;
