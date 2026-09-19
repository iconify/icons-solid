import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdi5s9ivd.css';

const viewBox = {"width":432,"height":408};
const content = `<path class="kdi5s9ivd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:card-travel"} {...others} />);
}

export default Component;
