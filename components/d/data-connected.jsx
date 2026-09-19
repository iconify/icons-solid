import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc8783bec.css';
import '../../css/q/qmao7mx0z.css';
import '../../css/q/qjaiieb6v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nc8783bec"/><path class="qmao7mx0z"/><path class="qjaiieb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-connected"} {...others} />);
}

export default Component;
