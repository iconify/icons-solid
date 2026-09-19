import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id_2uy04o.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="id_2uy04o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:center-focus-weak"} {...others} />);
}

export default Component;
