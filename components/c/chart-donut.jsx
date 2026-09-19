import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ino6mr9nn.css';
import '../../css/s/sn6br5b4i.css';
import '../../css/c/csubeabti.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ino6mr9nn"/><path class="sn6br5b4i"/><path class="csubeabti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-donut"} {...others} />);
}

export default Component;
