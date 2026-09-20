import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph7bx4b2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ph7bx4b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:image-off-line"} {...others} />);
}

export default Component;
