import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sy6dhfm5d.css';
import '../../css/n/n6x4k4dor.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="sy6dhfm5d"/><path class="n6x4k4dor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:tnc"} {...others} />);
}

export default Component;
