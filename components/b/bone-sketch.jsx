import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hzlsbc5oz.css';
import '../../css/e/eb5c6r-ic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hzlsbc5oz"/><path class="eb5c6r-ic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bone-sketch"} {...others} />);
}

export default Component;
