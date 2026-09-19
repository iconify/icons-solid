import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du2py5bet.css';

const viewBox = {"width":407,"height":512};
const content = `<path class="du2py5bet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:raspberry-pi"} {...others} />);
}

export default Component;
