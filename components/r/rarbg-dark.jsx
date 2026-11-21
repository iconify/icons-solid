import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t60l4c3ug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t60l4c3ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rarbg-dark"} {...others} />);
}

export default Component;
