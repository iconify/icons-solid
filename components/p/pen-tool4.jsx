import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4_vnzs8s.css';
import '../../css/m/mevjw7etc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g4_vnzs8s"/><path class="mevjw7etc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen-tool4"} {...others} />);
}

export default Component;
