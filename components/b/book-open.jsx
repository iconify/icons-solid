import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-hs3vbsc.css';
import '../../css/e/elyi5abmp.css';
import '../../css/i/iqliabezm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g-hs3vbsc"/><path class="elyi5abmp"/><path class="iqliabezm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:book-open"} {...others} />);
}

export default Component;
