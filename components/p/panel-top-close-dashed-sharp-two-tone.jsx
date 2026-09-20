import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bylbwoj8p.css';
import '../../css/i/ift3yubeo.css';
import '../../css/z/zvepp4dfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="bylbwoj8p"/><path class="ift3yubeo"/><path class="zvepp4dfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-top-close-dashed-sharp-two-tone"} {...others} />);
}

export default Component;
