import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/benc_65rz.css';

const viewBox = {"width":426,"height":768};
const content = `<path class="benc_65rz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:pin"} {...others} />);
}

export default Component;
