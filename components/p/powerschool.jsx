import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8h1w9rih.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s8h1w9rih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:powerschool"} {...others} />);
}

export default Component;
