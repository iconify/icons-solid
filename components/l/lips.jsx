import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z2aue9bmq.css';
import '../../css/s/szqd1bcxc.css';
import '../../css/l/lxivd679c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="z2aue9bmq"/><path class="szqd1bcxc"/><path class="lxivd679c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lips"} {...others} />);
}

export default Component;
