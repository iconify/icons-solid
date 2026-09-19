import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxmh1e_dh.css';
import '../../css/n/np-r86b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bxmh1e_dh"/><path class="np-r86b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-cloud-drizzle"} {...others} />);
}

export default Component;
