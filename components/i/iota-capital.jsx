import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/edk17f3iz.css';
import '../../css/i/i9fsn5x7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="edk17f3iz"/><path class="i9fsn5x7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:iota-capital"} {...others} />);
}

export default Component;
