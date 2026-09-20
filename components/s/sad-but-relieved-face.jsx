import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw9z725_e.css';
import '../../css/l/llu4l5c-t.css';
import '../../css/d/dv5k-kbxm.css';
import '../../css/k/k9jsl_s7l.css';
import '../../css/i/i95m7f66s.css';
import '../../css/g/gitxq1b5k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tw9z725_e"/><path class="llu4l5c-t"/><path class="dv5k-kbxm"/><path class="k9jsl_s7l"/><path class="i95m7f66s"/><path class="gitxq1b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sad-but-relieved-face"} {...others} />);
}

export default Component;
