import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6inds_nn.css';
import '../../css/b/bx75ttivl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q6inds_nn"/><path class="bx75ttivl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bubble-search"} {...others} />);
}

export default Component;
