import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w91hv6pvw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w91hv6pvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:color-picker"} {...others} />);
}

export default Component;
