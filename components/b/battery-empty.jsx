import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmemd-bvx.css';
import '../../css/a/as_el_bcn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qmemd-bvx"/><path class="as_el_bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:battery-empty"} {...others} />);
}

export default Component;
