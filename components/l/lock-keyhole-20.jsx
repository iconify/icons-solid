import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okzvs_blx.css';
import '../../css/g/gu1a-jb1z.css';
import '../../css/t/tvwqtv2ki.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="okzvs_blx"/><path class="gu1a-jb1z"/><path class="tvwqtv2ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-keyhole-20"} {...others} />);
}

export default Component;
