import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ylp2f9iqe.css';
import '../../css/x/xvv72-blv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ylp2f9iqe"/><path class="xvv72-blv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:all-bookmark"} {...others} />);
}

export default Component;
