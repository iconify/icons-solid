import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hhvux2gvb.css';
import '../../css/m/mnaosmbku.css';
import '../../css/z/zrxk0nb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hhvux2gvb"/><path class="mnaosmbku"/><path class="zrxk0nb5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-recive"} {...others} />);
}

export default Component;
