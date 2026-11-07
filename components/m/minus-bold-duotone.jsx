import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_kh4ijio.css';
import '../../css/p/phstewbwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_kh4ijio"/><path class="phstewbwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minus-bold-duotone"} {...others} />);
}

export default Component;
