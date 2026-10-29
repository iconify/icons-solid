import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t7aiijbwz.css';
import '../../css/f/fv6kukroi.css';
import '../../css/e/euj49csjz.css';
import '../../css/o/o58t9qojd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t7aiijbwz"/><path class="fv6kukroi wm-shadow"/><path class="euj49csjz"/><path class="o58t9qojd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:piano-engrave"} {...others} />);
}

export default Component;
