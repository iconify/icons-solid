import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iympo7t3y.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="iympo7t3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:voice-scan-2"} {...others} />);
}

export default Component;
