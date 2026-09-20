import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx-j32p0d.css';
import '../../css/a/ad3korw9k.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="jx-j32p0d"/><path class="ad3korw9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-immunizations"} {...others} />);
}

export default Component;
