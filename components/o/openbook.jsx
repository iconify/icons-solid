import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpl09-boe.css';
import '../../css/m/my7pz4ppw.css';
import '../../css/n/ni4k71_hl.css';
import '../../css/w/w-ic5dfog.css';
import '../../css/z/zzhkhubht.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tpl09-boe"/><path class="my7pz4ppw"/><path class="ni4k71_hl"/><path class="w-ic5dfog"/><path class="zzhkhubht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:openbook"} {...others} />);
}

export default Component;
