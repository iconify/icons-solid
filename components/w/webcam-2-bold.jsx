import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cti6nxbgy.css';
import '../../css/k/kiyzhcvkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cti6nxbgy"/><path class="kiyzhcvkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:webcam-2-bold"} {...others} />);
}

export default Component;
