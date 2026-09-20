import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfyy2kbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfyy2kbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-chevrons-right-fill"} {...others} />);
}

export default Component;
