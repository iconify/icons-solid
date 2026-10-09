import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvj1k6p0o.css';
import '../../css/h/h5d_4v8si.css';
import '../../css/x/xsz5ie_ke.css';
import '../../css/f/f5h10_v-a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zvj1k6p0o"/><path class="h5d_4v8si"/><path class="xsz5ie_ke"/><path class="f5h10_v-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wifi-20-bold"} {...others} />);
}

export default Component;
