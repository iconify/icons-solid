import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n416od3sq.css';
import '../../css/s/smfmp7bbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n416od3sq"/><path class="smfmp7bbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plaaylist-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
