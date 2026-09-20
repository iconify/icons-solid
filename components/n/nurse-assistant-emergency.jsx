import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsczfvz-m.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rsczfvz-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nurse-assistant-emergency"} {...others} />);
}

export default Component;
