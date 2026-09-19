import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o364n5cnh.css';
import '../../css/z/z3qqnubwe.css';
import '../../css/z/z1ppbibmx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="o364n5cnh"/><path class="z3qqnubwe"/><path class="z1ppbibmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:paste"} {...others} />);
}

export default Component;
