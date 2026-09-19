import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj59ymb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xj59ymb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pin-slash-alt-filled"} {...others} />);
}

export default Component;
