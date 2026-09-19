import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vezelzblp.css';
import '../../css/s/s_na8yd8p.css';
import '../../css/n/nn3tqgwrl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="vezelzblp"/><path class="s_na8yd8p"/><path class="nn3tqgwrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-1"} {...others} />);
}

export default Component;
