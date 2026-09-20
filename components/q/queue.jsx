import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhlh1hb6b.css';
import '../../css/m/mno1kzu5b.css';
import '../../css/d/didum-i0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vhlh1hb6b"/><path class="mno1kzu5b"/><path class="didum-i0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:queue"} {...others} />);
}

export default Component;
