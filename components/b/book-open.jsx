import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/is5xql_vk.css';
import '../../css/z/zky6z_1dg.css';
import '../../css/v/v4jvmdb2r.css';
import '../../css/c/ctjcreb2q.css';
import '../../css/j/janj24-ql.css';
import '../../css/j/jek6slb-o.css';
import '../../css/o/oddymt8am.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="is5xql_vk"/><path class="zky6z_1dg"/><path class="v4jvmdb2r wm-shine"/><path class="ctjcreb2q wm-k"/><path class="janj24-ql wm-a"/><path class="jek6slb-o"/><path class="oddymt8am"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:book-open"} {...others} />);
}

export default Component;
