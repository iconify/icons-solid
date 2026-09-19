import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl5_it4ct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cl5_it4ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:border-bottom-filled"} {...others} />);
}

export default Component;
