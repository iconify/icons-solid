import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzdnmsb-q.css';
import '../../css/t/ty_2is9tk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dzdnmsb-q"/><circle class="ty_2is9tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:bold-arab-dad"} {...others} />);
}

export default Component;
