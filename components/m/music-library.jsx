import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc6c15taa.css';
import '../../css/p/pnnjfds4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gc6c15taa"/><path class="pnnjfds4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:music-library"} {...others} />);
}

export default Component;
