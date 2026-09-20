import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_89rtb6l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x_89rtb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:wine-bottle-solid"} {...others} />);
}

export default Component;
