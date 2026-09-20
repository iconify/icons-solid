import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy8ogs3oi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iy8ogs3oi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:line-height-line"} {...others} />);
}

export default Component;
