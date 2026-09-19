import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/f/fxxpvfbfc.css';
import '../../css/y/yjpx9_x3d.css';
import '../../css/m/mqcgxbctd.css';
import '../../css/z/z28_gjbdn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="fxxpvfbfc"/><path class="yjpx9_x3d"/><path class="mqcgxbctd"/><path class="z28_gjbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:face-with-head-bandage"} {...others} />);
}

export default Component;
