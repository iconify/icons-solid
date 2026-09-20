import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1dxpsbeo.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="n1dxpsbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:elevator"} {...others} />);
}

export default Component;
