import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlavk1bjm.css';
import '../../css/p/phap5z8zh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xlavk1bjm"/><path class="phap5z8zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pie-chart-outline"} {...others} />);
}

export default Component;
