import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0guk_b0a.css';
import '../../css/c/citsypb7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0guk_b0a"/><path class="citsypb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-top-arrow-filled"} {...others} />);
}

export default Component;
