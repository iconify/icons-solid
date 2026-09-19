import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1goxvk8b.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="o1goxvk8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:temperature-three-quarters"} {...others} />);
}

export default Component;
