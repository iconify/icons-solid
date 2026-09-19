import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9jnc9b3h.css';
import '../../css/l/l83296b_y.css';
import '../../css/g/gv7hefb0x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z9jnc9b3h"/><path class="l83296b_y"/><circle class="gv7hefb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:ipad"} {...others} />);
}

export default Component;
