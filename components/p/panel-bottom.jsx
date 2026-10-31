import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/azblslbta.css';
import '../../css/b/b0vc4hgrz.css';
import '../../css/o/o05uqgbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="azblslbta wm-shadow"/><path class="b0vc4hgrz"/><path class="o05uqgbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:panel-bottom"} {...others} />);
}

export default Component;
