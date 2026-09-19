import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n--umek2k.css';
import '../../css/w/w7-r9c5xo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n--umek2k"/><path class="w7-r9c5xo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cloud-check"} {...others} />);
}

export default Component;
