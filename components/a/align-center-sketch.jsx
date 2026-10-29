import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iaz8bxbvw.css';
import '../../css/o/ouug8ac1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="iaz8bxbvw"/><path class="ouug8ac1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-center-sketch"} {...others} />);
}

export default Component;
