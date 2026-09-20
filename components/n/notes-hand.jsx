import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md8en7cla.css';
import '../../css/p/p1hqjib3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="md8en7cla"/><path class="p1hqjib3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:notes-hand"} {...others} />);
}

export default Component;
