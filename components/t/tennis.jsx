import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcj4nbc5p.css';
import '../../css/l/lbcq76bkt.css';
import '../../css/m/m1nz26bvi.css';
import '../../css/z/zsfrxacyh.css';
import '../../css/i/i_8xh4n4w.css';
import '../../css/o/ovmlhq_gh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wcj4nbc5p"/><path class="lbcq76bkt"/><path class="m1nz26bvi"/><path class="zsfrxacyh"/><path class="i_8xh4n4w"/><path class="ovmlhq_gh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tennis"} {...others} />);
}

export default Component;
