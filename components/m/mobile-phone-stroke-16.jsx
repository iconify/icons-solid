import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtdb2rb_j.css';
import '../../css/x/xg2k39d9n.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="dtdb2rb_j"/><path class="xg2k39d9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:mobile-phone-stroke-16"} {...others} />);
}

export default Component;
