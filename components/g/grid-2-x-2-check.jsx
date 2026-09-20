import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljh_osb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ljh_osb8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:grid-2-x-2-check"} {...others} />);
}

export default Component;
