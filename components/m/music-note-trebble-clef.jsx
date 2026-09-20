import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow0w91b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ow0w91b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:music-note-trebble-clef"} {...others} />);
}

export default Component;
