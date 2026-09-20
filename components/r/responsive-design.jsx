import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vmrnz3kfn.css';
import '../../css/v/vp5dwb90q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vmrnz3kfn"/><path class="vp5dwb90q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:responsive-design"} {...others} />);
}

export default Component;
