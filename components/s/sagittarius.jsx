import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkm5kv_yd.css';
import '../../css/h/h_pt1abna.css';
import '../../css/e/egcw38bju.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dkm5kv_yd"/><path class="h_pt1abna"/><path class="egcw38bju"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sagittarius"} {...others} />);
}

export default Component;
