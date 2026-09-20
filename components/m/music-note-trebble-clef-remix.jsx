import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e84jpyb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e84jpyb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:music-note-trebble-clef-remix"} {...others} />);
}

export default Component;
