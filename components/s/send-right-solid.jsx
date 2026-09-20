import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eudn5vbdr.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="eudn5vbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:send-right-solid"} {...others} />);
}

export default Component;
