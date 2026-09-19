import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtdb2rb_j.css';
import '../../css/d/dmcux5bwl.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="dtdb2rb_j"/><path class="dmcux5bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:mobile-phone-fill-16"} {...others} />);
}

export default Component;
