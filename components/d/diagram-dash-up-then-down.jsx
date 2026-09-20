import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z_o135b7f.css';
import '../../css/v/vf6f1tcpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z_o135b7f"/><path class="vf6f1tcpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-dash-up-then-down"} {...others} />);
}

export default Component;
