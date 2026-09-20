import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vev8xfbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vev8xfbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:noteblock"} {...others} />);
}

export default Component;
