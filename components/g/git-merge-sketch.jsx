import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ytt-abbya.css';
import '../../css/f/fj_c3hbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ytt-abbya"/><path class="fj_c3hbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-merge-sketch"} {...others} />);
}

export default Component;
