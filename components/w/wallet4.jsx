import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4ib0gbqn.css';
import '../../css/t/terq8rrsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p4ib0gbqn"/><path class="terq8rrsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet4"} {...others} />);
}

export default Component;
