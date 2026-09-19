import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg6bv3b-l.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="gg6bv3b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:fire-extinguisher"} {...others} />);
}

export default Component;
