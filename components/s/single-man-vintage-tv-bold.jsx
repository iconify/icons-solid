import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw4x6rw-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dw4x6rw-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-man-vintage-tv-bold"} {...others} />);
}

export default Component;
