import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/ht-mpzbha.css';
import '../../css/i/iqw1xpbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ht-mpzbha"/><path class="iqw1xpbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bamboo-sketch"} {...others} />);
}

export default Component;
