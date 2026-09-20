import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/avpgq1kjt.css';
import '../../css/b/bjlqahb4n.css';
import '../../css/t/tsy8wcblq.css';
import '../../css/a/aqt1dxftk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="avpgq1kjt"/><path class="bjlqahb4n"/><path class="tsy8wcblq"/><path class="aqt1dxftk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:sharing-data"} {...others} />);
}

export default Component;
