import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n2wcz0b2s.css';
import '../../css/b/bjh1f82tm.css';
import '../../css/h/hx6xedbpi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="n2wcz0b2s"/><path class="bjh1f82tm"/><path class="hx6xedbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-1"} {...others} />);
}

export default Component;
