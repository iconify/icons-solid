import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz4ladbzq.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="rz4ladbzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:filter-2-filled"} {...others} />);
}

export default Component;
