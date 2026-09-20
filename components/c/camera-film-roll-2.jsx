import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfoduhbbs.css';
import '../../css/k/kksnzpblz.css';
import '../../css/j/jqan74oga.css';
import '../../css/m/my3wwmbdz.css';
import '../../css/q/qzaw6l1lc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pfoduhbbs"/><path class="kksnzpblz"/><path class="jqan74oga"/><path class="my3wwmbdz"/><path class="qzaw6l1lc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:camera-film-roll-2"} {...others} />);
}

export default Component;
