import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0ld87yxf.css';
import '../../css/z/z5qvmea1y.css';
import '../../css/f/ffmw93blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j0ld87yxf"/><path class="z5qvmea1y"/><path class="ffmw93blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:drop"} {...others} />);
}

export default Component;
