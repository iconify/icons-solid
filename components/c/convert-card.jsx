import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dxcqicbbo.css';
import '../../css/l/lbvil20dt.css';
import '../../css/l/l6umjrccz.css';
import '../../css/m/m598ti66d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dxcqicbbo"/><path class="lbvil20dt"/><path class="l6umjrccz"/><path class="m598ti66d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:convert-card"} {...others} />);
}

export default Component;
