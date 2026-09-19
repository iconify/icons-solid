import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg0lz9bfx.css';
import '../../css/y/y-np30t2x.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="lg0lz9bfx"/><path class="y-np30t2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bench-filled"} {...others} />);
}

export default Component;
