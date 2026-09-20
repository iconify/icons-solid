import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/seq8pl07q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="seq8pl07q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pathfinder-outline-remix"} {...others} />);
}

export default Component;
