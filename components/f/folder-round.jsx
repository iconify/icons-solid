import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3i9qpgha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t3i9qpgha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-round"} {...others} />);
}

export default Component;
