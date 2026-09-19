import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aesvddc0d.css';
import '../../css/o/ol0nnwgrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aesvddc0d"/><path class="ol0nnwgrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:touch-locked-04"} {...others} />);
}

export default Component;
