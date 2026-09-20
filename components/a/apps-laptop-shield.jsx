import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3gkvi2sv.css';
import '../../css/n/n6h9d0b4y.css';
import '../../css/o/obzaa1bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d3gkvi2sv"/><path class="n6h9d0b4y"/><path class="obzaa1bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:apps-laptop-shield"} {...others} />);
}

export default Component;
