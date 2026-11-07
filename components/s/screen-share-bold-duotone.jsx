import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aof5xebnh.css';
import '../../css/i/i2cm9bb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aof5xebnh"/><path clip-rule="evenodd" class="i2cm9bb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screen-share-bold-duotone"} {...others} />);
}

export default Component;
