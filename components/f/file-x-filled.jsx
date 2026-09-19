import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf44ky2lr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tf44ky2lr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-x-filled"} {...others} />);
}

export default Component;
