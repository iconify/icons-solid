import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gjnxcgb_j.css';
import '../../css/a/arf83eb9f.css';
import '../../css/y/y6-th164g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gjnxcgb_j"/><path class="arf83eb9f"/><path class="y6-th164g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:notes-quotes"} {...others} />);
}

export default Component;
