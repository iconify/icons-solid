import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/torned4wc.css';
import '../../css/h/hp_7sj3uc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="torned4wc"/><path class="hp_7sj3uc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:keycap"} {...others} />);
}

export default Component;
