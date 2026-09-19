import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jacl9bcni.css';
import '../../css/k/kq61m-efc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jacl9bcni"/><path class="kq61m-efc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:soil-alt"} {...others} />);
}

export default Component;
