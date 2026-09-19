import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efff6o-je.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="efff6o-je"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:border-radius"} {...others} />);
}

export default Component;
