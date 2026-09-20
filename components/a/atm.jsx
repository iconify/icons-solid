import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekdg5ur0t.css';
import '../../css/y/yor81gb5d.css';
import '../../css/u/u4_g3v0-k.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ekdg5ur0t"/><ellipse class="yor81gb5d"/><path class="u4_g3v0-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:atm"} {...others} />);
}

export default Component;
