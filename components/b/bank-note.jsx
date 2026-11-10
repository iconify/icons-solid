import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydsc7p50q.css';
import '../../css/u/ud3yoebqd.css';
import '../../css/f/f4brc0bci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ydsc7p50q"/><path class="ud3yoebqd"/><path class="f4brc0bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bank-note"} {...others} />);
}

export default Component;
