import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzy7uyvnw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vzy7uyvnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gotosocial-light"} {...others} />);
}

export default Component;
