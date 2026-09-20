import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl_8k3bvg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nl_8k3bvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:music-note-trebble-clef-solid"} {...others} />);
}

export default Component;
