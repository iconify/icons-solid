import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um1bj7bbr.css';
import '../../css/g/gph3mkbfr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/d_5l10bed.css';
import '../../css/n/n4ivllbah.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="um1bj7bbr"/><path class="gph3mkbfr"/><g class="xtpeb-edw"><path class="d_5l10bed"/><path class="n4ivllbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightning-bold-duotone"} {...others} />);
}

export default Component;
