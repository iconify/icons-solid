import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ou9207p9w.css';
import '../../css/n/n7fs0pb-o.css';

const viewBox = {"width":36,"height":36};
const content = `<g class="ft5dv1b6b"><circle class="ou9207p9w"/><path class="n7fs0pb-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:polygon"} {...others} />);
}

export default Component;
