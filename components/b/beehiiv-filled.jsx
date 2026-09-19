import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab3_j_b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ab3_j_b9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:beehiiv-filled"} {...others} />);
}

export default Component;
