import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y19h4g-0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y19h4g-0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:medal-alt-2-filled"} {...others} />);
}

export default Component;
