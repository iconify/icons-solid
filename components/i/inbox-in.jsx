import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zefeifmbu.css';
import '../../css/s/s89ui8avr.css';
import '../../css/i/ivigeonoh.css';
import '../../css/q/qxmsexbvt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="zefeifmbu"/><path class="s89ui8avr"/><path class="ivigeonoh"/><path class="qxmsexbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:inbox-in"} {...others} />);
}

export default Component;
