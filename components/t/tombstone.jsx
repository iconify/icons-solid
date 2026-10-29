import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9-0xsbdc.css';
import '../../css/t/ttv992fnh.css';
import '../../css/x/xlvv8xb5t.css';
import '../../css/d/d68mnnbuz.css';
import '../../css/o/o6pq0np1a.css';
import '../../css/p/p6ihlbblf.css';
import '../../css/w/wx0o3b_ce.css';
import '../../css/t/tfxoarlfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e9-0xsbdc wm-shadow"/><path class="ttv992fnh wm-k"/><path class="wm-k xlvv8xb5t"/><path class="d68mnnbuz wm-shine"/><path class="o6pq0np1a wm-a"/><path class="p6ihlbblf wm-k"/><path class="wm-deco wx0o3b_ce"/><path class="tfxoarlfm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:tombstone"} {...others} />);
}

export default Component;
