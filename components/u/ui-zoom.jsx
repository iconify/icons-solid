import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6dzzqbgo.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="c6dzzqbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-zoom"} {...others} />);
}

export default Component;
