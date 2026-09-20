import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylykssbkx.css';
import '../../css/b/bwmi_1b-r.css';
import '../../css/p/p2v3_yp0j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ylykssbkx"/><path class="bwmi_1b-r"/><path class="p2v3_yp0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:volume-up"} {...others} />);
}

export default Component;
