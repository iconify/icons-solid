import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g43n1dbsd.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="g43n1dbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:truck-1"} {...others} />);
}

export default Component;
