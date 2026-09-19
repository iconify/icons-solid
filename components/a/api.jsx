import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4dq40b1b.css';
import '../../css/k/k_2ois9bt.css';
import '../../css/w/w5fsu1wxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x4dq40b1b"/><path class="k_2ois9bt"/><path class="w5fsu1wxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:api"} {...others} />);
}

export default Component;
