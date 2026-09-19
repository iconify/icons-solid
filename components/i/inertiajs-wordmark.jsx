import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fycv7t8zn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fycv7t8zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:inertiajs-wordmark"} {...others} />);
}

export default Component;
