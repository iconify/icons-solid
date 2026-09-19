import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co0vt46aa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="co0vt46aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bowl-hot-filled"} {...others} />);
}

export default Component;
