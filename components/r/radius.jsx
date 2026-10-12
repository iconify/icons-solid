import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxom9tmkx.css';
import '../../css/n/nkf5_lt8x.css';
import '../../css/x/xdwv0wb3e.css';
import '../../css/a/ayygo2qpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bxom9tmkx"/><circle transform="rotate(90 12 12)" class="nkf5_lt8x"/><path class="xdwv0wb3e"/><circle class="ayygo2qpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:radius"} {...others} />);
}

export default Component;
