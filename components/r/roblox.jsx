import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb1eob28e.css';

const viewBox = {"width":500,"height":500};
const content = `<path clip-rule="evenodd" class="hb1eob28e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:roblox"} {...others} />);
}

export default Component;
