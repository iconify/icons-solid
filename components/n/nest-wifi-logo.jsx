import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/j/jk2cgunvr.css';
import '../../css/r/r8qt-la5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="jk2cgunvr"/><path clip-rule="evenodd" class="r8qt-la5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:nest-wifi-logo"} {...others} />);
}

export default Component;
