import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m_t-z1mbs.css';
import '../../css/e/e2kztj1me.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="m_t-z1mbs"/><path class="e2kztj1me"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-1"} {...others} />);
}

export default Component;
