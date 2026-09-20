import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0g_tgh1a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="x0g_tgh1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pacman-solid"} {...others} />);
}

export default Component;
