import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df6bc1b2y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="df6bc1b2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:verified-filled"} {...others} />);
}

export default Component;
