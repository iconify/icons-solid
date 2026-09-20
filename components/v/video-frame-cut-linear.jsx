import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bc_yy0adh.css';
import '../../css/c/c8qz4oc-t.css';
import '../../css/j/jgmiltbod.css';
import '../../css/d/d01mapbla.css';
import '../../css/t/tt5jrshzt.css';
import '../../css/v/vqrmtubzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bc_yy0adh"/><path class="c8qz4oc-t"/><path class="jgmiltbod"/><path class="d01mapbla"/><path class="tt5jrshzt"/><path class="vqrmtubzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-linear"} {...others} />);
}

export default Component;
