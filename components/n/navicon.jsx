import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glgc2s32b.css';
import '../../css/t/t6zyl3h8b.css';
import '../../css/n/naljiqsza.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="glgc2s32b"/><path class="t6zyl3h8b"/><path class="naljiqsza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:navicon"} {...others} />);
}

export default Component;
