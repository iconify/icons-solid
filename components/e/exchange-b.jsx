import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w-1seubsl.css';
import '../../css/j/jmxdyfpxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w-1seubsl"/><path class="jmxdyfpxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:exchange-b"} {...others} />);
}

export default Component;
