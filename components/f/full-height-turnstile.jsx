import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av1ilqbxe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="av1ilqbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:full-height-turnstile"} {...others} />);
}

export default Component;
