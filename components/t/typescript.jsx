import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yf5ivcc2o.css';
import '../../css/h/hic78ybwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="yf5ivcc2o"/><path class="hic78ybwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:typescript"} {...others} />);
}

export default Component;
