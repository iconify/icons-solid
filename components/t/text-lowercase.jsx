import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v4e18wb_d.css';
import '../../css/y/yq7trvbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v4e18wb_d"/><path class="yq7trvbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-lowercase"} {...others} />);
}

export default Component;
