import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5yc1ib6b.css';
import '../../css/h/huno55bpx.css';
import '../../css/c/cuxq-5b7t.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="j5yc1ib6b"/><path class="huno55bpx"/><path class="cuxq-5b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:pharmacy"} {...others} />);
}

export default Component;
