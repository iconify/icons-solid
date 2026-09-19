import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5zt_gved.css';
import '../../css/z/z-s_b7rqn.css';
import '../../css/n/na80c_qqt.css';
import '../../css/h/hf8_b9b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5zt_gved"/><path class="z-s_b7rqn"/><path class="na80c_qqt"/><path class="hf8_b9b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:react"} {...others} />);
}

export default Component;
