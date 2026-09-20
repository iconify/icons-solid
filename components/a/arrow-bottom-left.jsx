import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yau_oxycf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yau_oxycf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:arrow-bottom-left"} {...others} />);
}

export default Component;
