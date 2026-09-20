import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yno5idtej.css';
import '../../css/u/uve6c28av.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yno5idtej"/><path class="uve6c28av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-pie-filled"} {...others} />);
}

export default Component;
