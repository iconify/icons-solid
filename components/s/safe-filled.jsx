import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s07htpbtb.css';
import '../../css/v/vslx-5blv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s07htpbtb"/><path class="vslx-5blv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:safe-filled"} {...others} />);
}

export default Component;
