import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3-qndq9t.css';
import '../../css/h/hm6x3kk-j.css';
import '../../css/h/hl3yc9npn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a3-qndq9t"/><path class="hm6x3kk-j"/><path class="hl3yc9npn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:workspace-20-bold"} {...others} />);
}

export default Component;
