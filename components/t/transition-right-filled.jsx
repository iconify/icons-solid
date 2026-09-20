import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8x6g5o0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8x6g5o0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transition-right-filled"} {...others} />);
}

export default Component;
