import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vezelzblp.css';
import '../../css/v/v5re5yb_r.css';
import '../../css/y/yl6ayjbtu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="vezelzblp"/><path class="v5re5yb_r"/><path class="yl6ayjbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-west"} {...others} />);
}

export default Component;
