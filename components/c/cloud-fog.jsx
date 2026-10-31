import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l4xqg49hw.css';
import '../../css/c/c1belbb-g.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/o/og7v3d3kb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="l4xqg49hw wm-shadow"/><path class="c1belbb-g wm-shadow"/><path class="n1y1i5mpe"/><path class="og7v3d3kb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-fog"} {...others} />);
}

export default Component;
