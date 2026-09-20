import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hno7pvg-a.css';
import '../../css/g/g9xrnlb8l.css';
import '../../css/o/oqg9eif2b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hno7pvg-a"/><path class="g9xrnlb8l"/><path class="oqg9eif2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:hierarchy-1"} {...others} />);
}

export default Component;
