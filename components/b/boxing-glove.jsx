import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oc2hzwbzo.css';
import '../../css/e/emuvuxb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oc2hzwbzo"/><path class="emuvuxb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:boxing-glove"} {...others} />);
}

export default Component;
