import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt9v0xv0o.css';
import '../../css/a/aezzb1b2t.css';
import '../../css/h/h_gv0rbbm.css';
import '../../css/i/ixa8pk-4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gt9v0xv0o"/><path class="aezzb1b2t"/><path class="h_gv0rbbm"/><path class="ixa8pk-4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-user"} {...others} />);
}

export default Component;
