import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s72dbeb2y.css';
import '../../css/x/x2zbdkeaw.css';
import '../../css/h/hlsp4ac3y.css';
import '../../css/f/fboa2bbqg.css';
import '../../css/m/mspcjjimr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s72dbeb2y wm-k"/><path class="wm-a x2zbdkeaw"/><path class="hlsp4ac3y wm-shadow"/><path class="fboa2bbqg wm-k"/><path class="mspcjjimr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snowflake-engrave"} {...others} />);
}

export default Component;
