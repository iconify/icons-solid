import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oalm9db7k.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="oalm9db7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:gauge-simple-med"} {...others} />);
}

export default Component;
