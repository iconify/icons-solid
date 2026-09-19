import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve-_k2a0b.css';
import '../../css/l/lp_00w9vw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ve-_k2a0b"/><path class="lp_00w9vw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:flash-auto"} {...others} />);
}

export default Component;
