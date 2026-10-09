import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlolk7bbc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hlolk7bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-cooperative-48-bold"} {...others} />);
}

export default Component;
