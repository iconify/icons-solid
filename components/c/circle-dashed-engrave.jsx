import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/huw4-tbyz.css';
import '../../css/x/xv4sdqbgf.css';
import '../../css/o/o-fwz22nq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="huw4-tbyz"/><path class="wm-shadow xv4sdqbgf"/><path class="o-fwz22nq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-dashed-engrave"} {...others} />);
}

export default Component;
