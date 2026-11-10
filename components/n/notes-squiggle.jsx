import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sns67zb6g.css';
import '../../css/a/arf83eb9f.css';
import '../../css/d/dx27d25hi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sns67zb6g"/><path class="arf83eb9f"/><path class="dx27d25hi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:notes-squiggle"} {...others} />);
}

export default Component;
