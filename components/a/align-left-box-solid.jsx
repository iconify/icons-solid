import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qd841cc0d.css';
import '../../css/w/w-mrtkb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qd841cc0d"/><path class="w-mrtkb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:align-left-box-solid"} {...others} />);
}

export default Component;
