import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/getz5jb7k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="getz5jb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:trend-up-outline"} {...others} />);
}

export default Component;
