import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e__xz9bvx.css';
import '../../css/x/x6k9-3z8c.css';
import '../../css/s/shxaa7jyw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e__xz9bvx"/><path class="x6k9-3z8c"/><path class="shxaa7jyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tennisball"} {...others} />);
}

export default Component;
