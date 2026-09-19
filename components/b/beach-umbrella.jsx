import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xjkkmsbfm.css';
import '../../css/f/f53fssb8r.css';
import '../../css/s/s03lg-b7m.css';
import '../../css/n/nxwhpyb7q.css';
import '../../css/v/vd881lb-q.css';
import '../../css/k/kzewx46ie.css';
import '../../css/y/y_i_sdbwy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="xjkkmsbfm"/><path class="f53fssb8r"/><path class="s03lg-b7m"/><path class="nxwhpyb7q"/><path class="vd881lb-q"/><path class="kzewx46ie"/><path class="y_i_sdbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:beach-umbrella"} {...others} />);
}

export default Component;
