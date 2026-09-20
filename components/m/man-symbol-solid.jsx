import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnvm2tb2l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="vnvm2tb2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:man-symbol-solid"} {...others} />);
}

export default Component;
