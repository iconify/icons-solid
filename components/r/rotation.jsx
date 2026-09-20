import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m3h3otklp.css';
import '../../css/t/t10y6eb2y.css';
import '../../css/j/jo7dc815i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="m3h3otklp"/><path class="t10y6eb2y"/><path class="jo7dc815i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:rotation"} {...others} />);
}

export default Component;
