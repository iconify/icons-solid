import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no9_xk5oy.css';
import '../../css/x/xsodzci0j.css';
import '../../css/u/ussgam4hr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="no9_xk5oy"/><path class="xsodzci0j"/><path class="ussgam4hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:workspace-20"} {...others} />);
}

export default Component;
