import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/w/wlr_qlbtp.css';
import '../../css/q/qse46ibad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="wlr_qlbtp"/><path class="qse46ibad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:export"} {...others} />);
}

export default Component;
