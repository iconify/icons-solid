import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi8ylqbbb.css';

const viewBox = {"width":512,"height":502};
const content = `<path class="bi8ylqbbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:3ds-max"} {...others} />);
}

export default Component;
