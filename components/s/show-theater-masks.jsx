import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hwek3dbzr.css';
import '../../css/s/sbo31-buv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hwek3dbzr"/><path class="sbo31-buv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:show-theater-masks"} {...others} />);
}

export default Component;
