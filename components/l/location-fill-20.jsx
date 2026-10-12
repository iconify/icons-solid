import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l__tlsb3m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l__tlsb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:location-fill-20"} {...others} />);
}

export default Component;
