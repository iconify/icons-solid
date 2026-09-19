import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty51eibwy.css';
import '../../css/p/pg7d3m2ja.css';
import '../../css/y/ybvnaxjzx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ty51eibwy"/><path class="pg7d3m2ja"/><path class="ybvnaxjzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mic-off"} {...others} />);
}

export default Component;
