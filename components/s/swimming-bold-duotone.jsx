import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/wqc26mdly.css';
import '../../css/x/xun4g8t8p.css';
import '../../css/p/pql1o1cgo.css';
import '../../css/e/eh3neo0je.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="wqc26mdly"/><path class="xun4g8t8p"/></g><path class="pql1o1cgo"/><path class="eh3neo0je"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-bold-duotone"} {...others} />);
}

export default Component;
