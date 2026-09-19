import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc8q0j5av.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="tc8q0j5av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:ge"} {...others} />);
}

export default Component;
