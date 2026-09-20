import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n38-vj_wj.css';

const viewBox = {"width":12,"height":14};
const content = `<path class="n38-vj_wj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:accessibility"} {...others} />);
}

export default Component;
