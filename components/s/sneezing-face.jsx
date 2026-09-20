import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7tu-sb3b.css';
import '../../css/a/ak_3d_b9w.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/vohfakbar.css';
import '../../css/n/n5eowxben.css';
import '../../css/c/c9zz0ub1a.css';
import '../../css/y/y5nm76k9q.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="g7tu-sb3b"/><path class="ak_3d_b9w"/><g class="ij2x_72vy"><path class="vohfakbar"/><path class="n5eowxben"/><path class="c9zz0ub1a"/><path class="y5nm76k9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sneezing-face"} {...others} />);
}

export default Component;
