import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fyc56sbip.css';
import '../../css/s/ser6vbbjj.css';
import '../../css/b/bf3cxvlkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fyc56sbip"/><path class="ser6vbbjj wm-shadow"/><path class="bf3cxvlkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-commit-engrave"} {...others} />);
}

export default Component;
