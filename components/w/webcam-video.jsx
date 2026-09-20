import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrlu6h6mi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrlu6h6mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:webcam-video"} {...others} />);
}

export default Component;
