import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma1d8gb-b.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ma1d8gb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:sos-help-emergency-sign-solid"} {...others} />);
}

export default Component;
