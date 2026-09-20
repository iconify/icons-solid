import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9w93fb1t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p9w93fb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:compact-box-truck"} {...others} />);
}

export default Component;
