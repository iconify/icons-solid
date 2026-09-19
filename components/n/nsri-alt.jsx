import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnjdskbit.css';

const viewBox = {"width":355,"height":512};
const content = `<path clip-rule="evenodd" class="rnjdskbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:nsri-alt"} {...others} />);
}

export default Component;
