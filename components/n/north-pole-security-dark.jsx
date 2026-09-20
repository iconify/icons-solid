import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6r95vbrz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d6r95vbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:north-pole-security-dark"} {...others} />);
}

export default Component;
