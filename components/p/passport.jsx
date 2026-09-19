import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6xcxzbol.css';
import '../../css/w/wdo02gbao.css';
import '../../css/b/bzea6tsoy.css';
import '../../css/q/qq0d7y3ml.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="h6xcxzbol"/><path class="wdo02gbao"/><path class="bzea6tsoy"/><path class="qq0d7y3ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:passport"} {...others} />);
}

export default Component;
