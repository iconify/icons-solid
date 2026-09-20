import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txxrw9wmx.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-4};
const content = `<path class="txxrw9wmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:move-alt"} {...others} />);
}

export default Component;
