import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2k-k1brx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z2k-k1brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:sailsdotjs"} {...others} />);
}

export default Component;
