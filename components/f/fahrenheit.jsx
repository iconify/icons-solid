import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5seh0bht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5seh0bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:fahrenheit"} {...others} />);
}

export default Component;
