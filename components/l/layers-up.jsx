import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eas659bzs.css';
import '../../css/o/o1c76co7x.css';
import '../../css/n/n5r66h5fb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eas659bzs"/><path class="o1c76co7x"/><path class="n5r66h5fb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:layers-up"} {...others} />);
}

export default Component;
