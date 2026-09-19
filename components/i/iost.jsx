import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iyxrald2c.css';
import '../../css/j/jmem8m75d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="iyxrald2c"/><path class="jmem8m75d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:iost"} {...others} />);
}

export default Component;
