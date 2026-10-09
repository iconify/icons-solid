import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw9yj186n.css';
import '../../css/w/waz_2hbmd.css';
import '../../css/n/ne31ywxgx.css';
import '../../css/a/ani345bpd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dw9yj186n"/><path class="waz_2hbmd"/><path class="ne31ywxgx"/><path class="ani345bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-capture-20"} {...others} />);
}

export default Component;
