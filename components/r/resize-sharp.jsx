import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahqt9hblt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ahqt9hblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:resize-sharp"} {...others} />);
}

export default Component;
