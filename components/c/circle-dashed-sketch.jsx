import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xzr1ikboy.css';
import '../../css/r/re50tebqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xzr1ikboy"/><path class="re50tebqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-dashed-sketch"} {...others} />);
}

export default Component;
