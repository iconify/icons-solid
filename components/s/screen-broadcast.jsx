import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnm0peb1p.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vnm0peb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:screen-broadcast"} {...others} />);
}

export default Component;
