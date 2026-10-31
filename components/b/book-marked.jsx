import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cl5xc3tem.css';
import '../../css/e/e-res604y.css';
import '../../css/e/eembscket.css';
import '../../css/b/b_g1ylbow.css';
import '../../css/n/nw7-e304a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cl5xc3tem wm-shadow"/><path class="e-res604y"/><path class="eembscket"/><path class="b_g1ylbow"/><path class="nw7-e304a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:book-marked"} {...others} />);
}

export default Component;
