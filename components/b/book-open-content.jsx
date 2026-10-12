import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg4cd7bfx.css';
import '../../css/u/usk91uphc.css';
import '../../css/c/cdvnaeuhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dg4cd7bfx"/><path class="usk91uphc"/><path class="cdvnaeuhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-open-content"} {...others} />);
}

export default Component;
