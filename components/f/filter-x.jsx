import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s8iix90tg.css';
import '../../css/t/twsdh9bcf.css';
import '../../css/f/fn9fj5b4u.css';
import '../../css/y/yryqpsi8c.css';
import '../../css/x/x4niebq2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s8iix90tg wm-shadow"/><path class="twsdh9bcf wm-shadow"/><path class="fn9fj5b4u"/><path class="yryqpsi8c"/><path class="wm-s x4niebq2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:filter-x"} {...others} />);
}

export default Component;
