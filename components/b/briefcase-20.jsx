import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2_8-nb1y.css';
import '../../css/f/fbgnz0ewn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n2_8-nb1y"/><path class="fbgnz0ewn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:briefcase-20"} {...others} />);
}

export default Component;
