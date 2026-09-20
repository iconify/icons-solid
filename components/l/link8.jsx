import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0lpy4bji.css';
import '../../css/b/bwpik6bwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g0lpy4bji"/><path class="bwpik6bwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:link8"} {...others} />);
}

export default Component;
