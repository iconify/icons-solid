import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjblqxbkz.css';
import '../../css/m/mhg07abei.css';
import '../../css/j/jamog_u4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tjblqxbkz"/><path class="mhg07abei"/><path class="jamog_u4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:webhook"} {...others} />);
}

export default Component;
