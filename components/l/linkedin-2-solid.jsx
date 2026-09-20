import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn0o6fb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xn0o6fb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:linkedin-2-solid"} {...others} />);
}

export default Component;
