import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbpmk898z.css';
import '../../css/b/bkgpz5bbo.css';
import '../../css/e/eh8g-3fgw.css';
import '../../css/a/a00qaqbxf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hbpmk898z"/><path class="bkgpz5bbo"/><path class="eh8g-3fgw"/><path class="a00qaqbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frost-20-bold"} {...others} />);
}

export default Component;
