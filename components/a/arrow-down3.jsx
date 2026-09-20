import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zp_40v5uv.css';
import '../../css/s/s0zpkdbox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zp_40v5uv"/><path class="s0zpkdbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-down3"} {...others} />);
}

export default Component;
