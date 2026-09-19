import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk-3x8b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lk-3x8b5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:slice-filled"} {...others} />);
}

export default Component;
