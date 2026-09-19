import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8kwrsbjz.css';

const viewBox = {"width":480,"height":512};
const content = `<path class="p8kwrsbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:burger"} {...others} />);
}

export default Component;
