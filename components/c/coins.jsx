import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wmbc14diz.css';
import '../../css/e/escw9vdfc.css';
import '../../css/h/hrfy6hbni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wmbc14diz"/><path class="escw9vdfc"/><path class="hrfy6hbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:coins"} {...others} />);
}

export default Component;
