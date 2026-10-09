import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hotj8abpa.css';
import '../../css/l/ls15nzj_w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hotj8abpa"/><path class="ls15nzj_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alert-octagon-48"} {...others} />);
}

export default Component;
