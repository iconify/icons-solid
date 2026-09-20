import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9-lp9e9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9-lp9e9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shopping-basket"} {...others} />);
}

export default Component;
