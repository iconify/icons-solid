import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci7k0p4bs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ci7k0p4bs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:skull"} {...others} />);
}

export default Component;
