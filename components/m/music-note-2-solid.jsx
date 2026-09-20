import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3w_inz3k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f3w_inz3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:music-note-2-solid"} {...others} />);
}

export default Component;
