import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg_p-hb2s.css';

const viewBox = {"width":1786,"height":428,"left":107,"top":786};
const content = `<path class="wg_p-hb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tata-consultancy-services-dark"} {...others} />);
}

export default Component;
