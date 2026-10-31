import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t__fhvbow.css';
import '../../css/w/wmgmj3bwn.css';
import '../../css/f/f6hdhkjzk.css';
import '../../css/r/rzxg3ka6j.css';
import '../../css/t/thh19dbdv.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t__fhvbow wm-shadow"/><path class="wmgmj3bwn"/><path class="f6hdhkjzk"/><path class="rzxg3ka6j"/><path class="thh19dbdv"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:flag-off"} {...others} />);
}

export default Component;
