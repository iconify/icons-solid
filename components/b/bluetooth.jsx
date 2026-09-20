import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udl_u4bup.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="udl_u4bup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:bluetooth"} {...others} />);
}

export default Component;
