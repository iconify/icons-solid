import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8x25ojnw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="w8x25ojnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:c-sharp-outline"} {...others} />);
}

export default Component;
