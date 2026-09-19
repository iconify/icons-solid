import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw1au2but.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw1au2but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:chevron-up-outline"} {...others} />);
}

export default Component;
