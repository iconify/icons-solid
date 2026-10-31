import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y_9jw-bqe.css';
import '../../css/t/txpvyhjrw.css';
import '../../css/w/wi7m8_bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="y_9jw-bqe"/><path class="txpvyhjrw"/><path class="wi7m8_bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:mute"} {...others} />);
}

export default Component;
