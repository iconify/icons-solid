import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/a4t2l3b2j.css';
import '../../css/g/gf1va6b2r.css';
import '../../css/l/ltafvnejl.css';
import '../../css/c/crw-jwbli.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="a4t2l3b2j"/><path class="gf1va6b2r"/><path class="ltafvnejl"/><path class="crw-jwbli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:facebook-1"} {...others} />);
}

export default Component;
