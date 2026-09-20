import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or5y5jvbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="or5y5jvbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cloud-drizzle"} {...others} />);
}

export default Component;
