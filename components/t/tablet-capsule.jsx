import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfh6n882y.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rfh6n882y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:tablet-capsule"} {...others} />);
}

export default Component;
