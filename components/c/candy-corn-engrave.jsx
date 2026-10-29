import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jaline93j.css';
import '../../css/n/nyqj-4wfl.css';
import '../../css/d/dxfilmbdx.css';
import '../../css/a/a4vjoxyvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jaline93j wm-k"/><path class="nyqj-4wfl wm-shadow"/><path class="dxfilmbdx wm-k"/><path class="a4vjoxyvs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-corn-engrave"} {...others} />);
}

export default Component;
