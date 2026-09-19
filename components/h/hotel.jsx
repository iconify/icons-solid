import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzbf6_b4e.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="qzbf6_b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hotel"} {...others} />);
}

export default Component;
