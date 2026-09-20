import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0432tbfh.css';
import '../../css/r/rhsc8xbxu.css';
import '../../css/y/yisl4cuvc.css';
import '../../css/z/zaa5_hbqn.css';
import '../../css/h/hofudyblc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w0432tbfh"/><path class="rhsc8xbxu"/><path class="yisl4cuvc"/><path class="zaa5_hbqn"/><path class="hofudyblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-c-plus-plus"} {...others} />);
}

export default Component;
