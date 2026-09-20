import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_q4f9j6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u_q4f9j6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chevron-left-circle-filled"} {...others} />);
}

export default Component;
