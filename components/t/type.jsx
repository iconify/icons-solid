import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/ehuhc52sf.css';
import '../../css/q/q9_37ab9p.css';
import '../../css/t/ttioao7pr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ehuhc52sf"/><path class="q9_37ab9p"/><path class="ttioao7pr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:type"} {...others} />);
}

export default Component;
