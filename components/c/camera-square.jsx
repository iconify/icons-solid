import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw82_714f.css';
import '../../css/y/ysy1t6bhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer tw82_714f"/><path class="duoicon-primary-layer ysy1t6bhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:camera-square"} {...others} />);
}

export default Component;
