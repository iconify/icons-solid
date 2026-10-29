import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggpjqcbho.css';
import '../../css/v/vvze8ac2o.css';
import '../../css/s/sbyepeviz.css';
import '../../css/o/ou_jw0btw.css';
import '../../css/t/tjm9_wb4x.css';
import '../../css/a/aaqkj0b-l.css';
import '../../css/g/g9r928b-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggpjqcbho wm-shadow"/><path class="vvze8ac2o wm-k"/><path class="sbyepeviz wm-k"/><path class="ou_jw0btw wm-k"/><path class="tjm9_wb4x wm-k"/><path class="aaqkj0b-l wm-k"/><path class="g9r928b-j wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:more-horizontal"} {...others} />);
}

export default Component;
