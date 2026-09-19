import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wp2gcqb_l.css';
import '../../css/r/rivxn4bxh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="wp2gcqb_l"/><path class="rivxn4bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:add"} {...others} />);
}

export default Component;
