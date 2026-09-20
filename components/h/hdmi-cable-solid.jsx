import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l277xdb4x.css';
import '../../css/x/xqkddkb9a.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="l277xdb4x"/><path class="xqkddkb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:hdmi-cable-solid"} {...others} />);
}

export default Component;
