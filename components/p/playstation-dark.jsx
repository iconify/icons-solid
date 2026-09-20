import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqk2x3b6t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iqk2x3b6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:playstation-dark"} {...others} />);
}

export default Component;
