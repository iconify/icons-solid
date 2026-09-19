import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lucisccdd.css';
import '../../css/u/usk0x8bip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lucisccdd"/><path class="usk0x8bip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rocket"} {...others} />);
}

export default Component;
