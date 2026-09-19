import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpjd-ub0o.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="lpjd-ub0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:uni5475-box-filled"} {...others} />);
}

export default Component;
