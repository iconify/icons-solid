import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9noqwb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o9noqwb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:move-scroll-omnidirection-button"} {...others} />);
}

export default Component;
