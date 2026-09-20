import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc42u29hn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tc42u29hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:hockey-puck"} {...others} />);
}

export default Component;
