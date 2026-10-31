import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f6a-2rbfx.css';
import '../../css/e/eocdi3b5s.css';
import '../../css/l/lv22f_bmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="f6a-2rbfx wm-shadow"/><path class="eocdi3b5s wm-shadow"/><path class="lv22f_bmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tornado"} {...others} />);
}

export default Component;
