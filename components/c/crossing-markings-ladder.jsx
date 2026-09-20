import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlymt9bdv.css';
import '../../css/m/mfwm3ntrc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hlymt9bdv"/><path class="mfwm3ntrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:crossing-markings-ladder"} {...others} />);
}

export default Component;
