import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxn6s1jvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxn6s1jvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:line-chart"} {...others} />);
}

export default Component;
