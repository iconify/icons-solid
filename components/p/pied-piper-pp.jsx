import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw7jycbph.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="gw7jycbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:pied-piper-pp"} {...others} />);
}

export default Component;
