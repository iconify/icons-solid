import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tyz_-1bjv.css';
import '../../css/m/mzht45buz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tyz_-1bjv"/><path class="mzht45buz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-bot"} {...others} />);
}

export default Component;
