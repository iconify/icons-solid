import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb2rpnbqd.css';
import '../../css/q/qf40r3s6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eb2rpnbqd"/><path class="qf40r3s6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:face-slightly-smiling-plus-filled"} {...others} />);
}

export default Component;
