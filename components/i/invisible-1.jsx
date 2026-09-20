import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxa_0plyt.css';
import '../../css/z/zjbi_bcza.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/q/qn-i0bkas.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vxa_0plyt"/><path class="zjbi_bcza"/><path class="aqasqsbwy"/><path class="qn-i0bkas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:invisible-1"} {...others} />);
}

export default Component;
