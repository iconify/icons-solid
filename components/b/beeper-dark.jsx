import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0hbd4wrx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k0hbd4wrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beeper-dark"} {...others} />);
}

export default Component;
