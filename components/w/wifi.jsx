import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wt73-cb1v.css';
import '../../css/y/y4rd-qbsi.css';
import '../../css/q/qyrtl7b4j.css';
import '../../css/f/fnd83gbcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="wt73-cb1v"/><path class="y4rd-qbsi"/><path class="qyrtl7b4j"/><path class="fnd83gbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:wifi"} {...others} />);
}

export default Component;
