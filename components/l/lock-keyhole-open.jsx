import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab4ppporb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ab4ppporb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:lock-keyhole-open"} {...others} />);
}

export default Component;
