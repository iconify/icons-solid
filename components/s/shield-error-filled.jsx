import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8l4_q72h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8l4_q72h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shield-error-filled"} {...others} />);
}

export default Component;
