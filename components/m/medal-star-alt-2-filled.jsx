import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y64_zlase.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y64_zlase"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:medal-star-alt-2-filled"} {...others} />);
}

export default Component;
