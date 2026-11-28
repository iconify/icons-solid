import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz_qnk-ze.css';

const viewBox = {"width":1786,"height":428,"left":107,"top":786};
const content = `<path class="kz_qnk-ze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tata-consultancy-services-light"} {...others} />);
}

export default Component;
