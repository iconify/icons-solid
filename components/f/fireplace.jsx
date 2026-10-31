import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hrzs8jbti.css';
import '../../css/v/v74qchbee.css';
import '../../css/i/i3im3xb9b.css';
import '../../css/w/wtctkibiy.css';
import '../../css/d/d0-b-bjen.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hrzs8jbti wm-shadow"/><path class="v74qchbee wm-shadow"/><path class="i3im3xb9b"/><path class="wtctkibiy"/><path class="d0-b-bjen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:fireplace"} {...others} />);
}

export default Component;
