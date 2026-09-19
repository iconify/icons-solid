import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/io8dijb2e.css';
import '../../css/v/vrjw5bceo.css';
import '../../css/f/fbyqsqb1z.css';
import '../../css/a/a4qolv-_m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="io8dijb2e"/><path class="vrjw5bceo"/><path class="fbyqsqb1z"/><path class="a4qolv-_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:queen"} {...others} />);
}

export default Component;
