import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk4_gdckq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fk4_gdckq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:cloud-showers-heavy"} {...others} />);
}

export default Component;
