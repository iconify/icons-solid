import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n65kb88kt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n65kb88kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:artcraft-dark"} {...others} />);
}

export default Component;
