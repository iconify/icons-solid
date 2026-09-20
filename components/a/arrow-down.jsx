import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khz2yzbvv.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-4.5};
const content = `<path class="khz2yzbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:arrow-down"} {...others} />);
}

export default Component;
