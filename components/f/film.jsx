import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/r/r3aqt0b9e.css';
import '../../css/i/ifozc1efu.css';
import '../../css/n/ntgtefb8j.css';
import '../../css/e/esqdrgnmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="r3aqt0b9e"/><path class="ifozc1efu"/><path class="ntgtefb8j"/><path class="esqdrgnmu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:film"} {...others} />);
}

export default Component;
