import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4xyx_bsy.css';
import '../../css/t/tkzh8yb2s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p4xyx_bsy"/><path class="tkzh8yb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-cloudy"} {...others} />);
}

export default Component;
