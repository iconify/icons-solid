import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jzqtrlbxl.css';
import '../../css/x/x_x71gbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jzqtrlbxl"/><path class="x_x71gbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:building-a"} {...others} />);
}

export default Component;
