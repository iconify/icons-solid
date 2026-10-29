import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o6xz30bjo.css';
import '../../css/h/hqm_jhnao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o6xz30bjo"/><path class="hqm_jhnao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bold-sketch"} {...others} />);
}

export default Component;
