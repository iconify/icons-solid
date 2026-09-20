import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iau3g_b6k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iau3g_b6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ferocious-filled"} {...others} />);
}

export default Component;
