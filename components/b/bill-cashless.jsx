import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0d6t9b7h.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/s/s98zyjtml.css';
import '../../css/v/v-0xp4bjj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="l0d6t9b7h"/><path class="aqasqsbwy"/><path class="s98zyjtml"/><path class="v-0xp4bjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bill-cashless"} {...others} />);
}

export default Component;
