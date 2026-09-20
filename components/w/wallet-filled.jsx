import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t51t1vv5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t51t1vv5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:wallet-filled"} {...others} />);
}

export default Component;
