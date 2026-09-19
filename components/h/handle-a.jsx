import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hrq90hfel.css';
import '../../css/t/tr6q8eujb.css';
import '../../css/l/lipzzlbqo.css';
import '../../css/x/xmakm0znk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><circle class="hrq90hfel"/><path class="tr6q8eujb"/><path class="lipzzlbqo"/><path class="xmakm0znk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:handle-a"} {...others} />);
}

export default Component;
