import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ivin-ubhq.css';
import '../../css/x/xyfq1bbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ivin-ubhq wm-k"/><path class="wm-s xyfq1bbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-minus"} {...others} />);
}

export default Component;
