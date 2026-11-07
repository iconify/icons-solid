import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dciv8jbgc.css';
import '../../css/z/zo2kgwbhm.css';
import '../../css/h/hd5dgobzc.css';
import '../../css/k/kyfybbbty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dciv8jbgc"/><path class="zo2kgwbhm"/><path class="hd5dgobzc"/><path clip-rule="evenodd" class="kyfybbbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-tag-bold-duotone"} {...others} />);
}

export default Component;
