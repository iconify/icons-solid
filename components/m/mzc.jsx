import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wgy8ghb7i.css';
import '../../css/q/qvzx70gnh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="wgy8ghb7i"/><path class="qvzx70gnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mzc"} {...others} />);
}

export default Component;
