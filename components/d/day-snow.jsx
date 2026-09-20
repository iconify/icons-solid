import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/h/hwh0u9pgn.css';
import '../../css/m/mkfsuxb0u.css';
import '../../css/r/riwutnbjh.css';
import '../../css/b/b707iqbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="hwh0u9pgn"/><path class="mkfsuxb0u"/><path class="riwutnbjh"/><path class="b707iqbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:day-snow"} {...others} />);
}

export default Component;
