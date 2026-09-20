import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytj7at_sk.css';
import '../../css/b/b4ouy7bdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytj7at_sk"/><path class="b4ouy7bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:design-process-drawing-board"} {...others} />);
}

export default Component;
