import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-y4uq50q.css';
import '../../css/v/v4bg1ccwj.css';
import '../../css/z/zlnvfbcfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-y4uq50q"/><path class="v4bg1ccwj"/><path class="zlnvfbcfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rfid-filled"} {...others} />);
}

export default Component;
