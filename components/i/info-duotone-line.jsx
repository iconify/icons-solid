import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/f/fu6gzgbjs.css';
import '../../css/h/h7ggax-wi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><circle transform="matrix(-1 0 0 1 22 2)" class="fu6gzgbjs"/><path class="h7ggax-wi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:info-duotone-line"} {...others} />);
}

export default Component;
