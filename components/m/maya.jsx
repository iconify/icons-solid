import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfasz3buw.css';
import '../../css/i/iu6mn3bmp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xfasz3buw"/><path class="iu6mn3bmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:maya"} {...others} />);
}

export default Component;
