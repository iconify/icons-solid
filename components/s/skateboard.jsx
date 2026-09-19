import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-_3mcbkz.css';
import '../../css/v/vikdu2bvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-_3mcbkz"/><path class="vikdu2bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:skateboard"} {...others} />);
}

export default Component;
