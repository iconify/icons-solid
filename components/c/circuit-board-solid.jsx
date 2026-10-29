import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah0u-xqmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ah0u-xqmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circuit-board-solid"} {...others} />);
}

export default Component;
