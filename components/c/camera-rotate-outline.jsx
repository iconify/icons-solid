import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yul2wvb3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yul2wvb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-rotate-outline"} {...others} />);
}

export default Component;
