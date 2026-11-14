import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rs2a0w5yu.css';
import '../../css/y/ypavk3bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rs2a0w5yu"/><path class="ypavk3bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:conference"} {...others} />);
}

export default Component;
