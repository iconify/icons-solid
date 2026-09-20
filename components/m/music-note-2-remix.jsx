import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2hvsab5f.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="u2hvsab5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:music-note-2-remix"} {...others} />);
}

export default Component;
