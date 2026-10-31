import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/y/yzi5kb6_x.css';
import '../../css/e/epu53i2gd.css';
import '../../css/i/itwltdbml.css';
import '../../css/n/nogsjomrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="yzi5kb6_x"/><path class="epu53i2gd"/><path class="itwltdbml"/><path class="nogsjomrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-image"} {...others} />);
}

export default Component;
