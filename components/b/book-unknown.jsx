import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-hs3vbsc.css';
import '../../css/e/elyi5abmp.css';
import '../../css/t/t1okuubfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g-hs3vbsc"/><path class="elyi5abmp"/><path class="t1okuubfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:book-unknown"} {...others} />);
}

export default Component;
