import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z07rjrbqz.css';
import '../../css/m/m-h11vjnw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z07rjrbqz"/><path class="m-h11vjnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:document-outline"} {...others} />);
}

export default Component;
