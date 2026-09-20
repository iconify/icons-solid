import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zfe40388x.css';
import '../../css/y/yjh4kkbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zfe40388x"/><path class="yjh4kkbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:heaphone"} {...others} />);
}

export default Component;
