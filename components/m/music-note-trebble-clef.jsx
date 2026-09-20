import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/u25e0akyp.css';
import '../../css/m/m72_wqvcv.css';
import '../../css/y/ynebryeaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="u25e0akyp"/><path class="m72_wqvcv"/><path class="ynebryeaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:music-note-trebble-clef"} {...others} />);
}

export default Component;
