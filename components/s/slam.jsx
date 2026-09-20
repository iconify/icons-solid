import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x61jlibhq.css';
import '../../css/r/r9bbvybua.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x61jlibhq"/><path clip-rule="evenodd" class="r9bbvybua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:slam"} {...others} />);
}

export default Component;
