import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aovxu-bqv.css';
import '../../css/h/huqaq53uc.css';
import '../../css/x/xm0m1jbzf.css';
import '../../css/y/yzpbxo3et.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aovxu-bqv"/><path class="huqaq53uc"/><path class="xm0m1jbzf"/><path class="yzpbxo3et"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:book-reading"} {...others} />);
}

export default Component;
