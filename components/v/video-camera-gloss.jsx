import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk_is3nbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zk_is3nbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-camera-gloss"} {...others} />);
}

export default Component;
