import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/y/ymxku8hgn.css';
import '../../css/j/jgkjdwbbv.css';
import '../../css/r/rr7hscc0x.css';
import '../../css/n/n5kvjq2ku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="ymxku8hgn"/><path class="jgkjdwbbv"/><path class="rr7hscc0x"/><path class="n5kvjq2ku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-chart"} {...others} />);
}

export default Component;
