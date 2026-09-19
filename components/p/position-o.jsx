import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v--o8dbgk.css';
import '../../css/y/yol252b6a.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="v--o8dbgk"/><path class="yol252b6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:position-o"} {...others} />);
}

export default Component;
