import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/csgxn_bdv.css';
import '../../css/c/cu187kbng.css';
import '../../css/x/xcapk5bam.css';
import '../../css/j/jk6o2bb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="csgxn_bdv wm-shadow"/><path class="cu187kbng wm-shadow"/><path class="xcapk5bam"/><path class="jk6o2bb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wrench"} {...others} />);
}

export default Component;
