import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj62wxb8v.css';
import '../../css/x/xt396oxux.css';
import '../../css/d/dla8t97vb.css';
import '../../css/p/pfp6q0bhe.css';
import '../../css/d/d6miye_io.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bj62wxb8v"/><path class="xt396oxux"/><path class="dla8t97vb"/><path class="pfp6q0bhe"/><path class="d6miye_io"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:printer-3d-20"} {...others} />);
}

export default Component;
