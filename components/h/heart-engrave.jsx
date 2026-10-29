import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m_-dhfbtd.css';
import '../../css/h/hanoadvko.css';
import '../../css/u/uh01hzbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m_-dhfbtd"/><path class="hanoadvko wm-shadow"/><path class="uh01hzbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-engrave"} {...others} />);
}

export default Component;
