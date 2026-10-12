import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dus9g0b0r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dus9g0b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:indent-decrease-20"} {...others} />);
}

export default Component;
