import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g7do6rtrq.css';
import '../../css/e/epvvq5buv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g7do6rtrq"/><path class="epvvq5buv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-sketch"} {...others} />);
}

export default Component;
