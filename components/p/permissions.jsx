import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xhk2zpbbc.css';
import '../../css/s/sqdpvrbkf.css';
import '../../css/v/v8ptlt_jd.css';
import '../../css/m/m4buozbeh.css';
import '../../css/l/l6z2i9b7y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="xhk2zpbbc"/><path class="sqdpvrbkf"/><path class="v8ptlt_jd"/><circle class="m4buozbeh"/><path class="l6z2i9b7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:permissions"} {...others} />);
}

export default Component;
