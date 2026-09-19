import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/o606-ib_i.css';
import '../../css/q/qfaskacss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="o606-ib_i"/><path class="qfaskacss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:moon-angled-rain-zap"} {...others} />);
}

export default Component;
