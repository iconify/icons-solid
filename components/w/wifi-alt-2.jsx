import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pccm1gbjw.css';

const viewBox = {"width":504,"height":400};
const content = `<path class="pccm1gbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:wifi-alt-2"} {...others} />);
}

export default Component;
