import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxrn8tbcm.css';
import '../../css/x/xue14cb9o.css';
import '../../css/u/u1b3xzbod.css';
import '../../css/d/dbogasj6j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wxrn8tbcm"/><rect class="xue14cb9o"/><path class="u1b3xzbod"/><circle class="dbogasj6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:print-outline"} {...others} />);
}

export default Component;
