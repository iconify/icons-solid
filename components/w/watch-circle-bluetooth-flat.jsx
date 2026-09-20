import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/up-ebhb1o.css';
import '../../css/s/sx7s71yrk.css';
import '../../css/v/vbg06qk5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="up-ebhb1o"/><path clip-rule="evenodd" class="sx7s71yrk"/><path clip-rule="evenodd" class="vbg06qk5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:watch-circle-bluetooth-flat"} {...others} />);
}

export default Component;
