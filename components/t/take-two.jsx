import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p63lpxbhg.css';
import '../../css/g/gxnzrob6v.css';
import '../../css/t/tkq46hbva.css';
import '../../css/l/l75xwsb9d.css';

const viewBox = {"width":1000,"height":1007.85};
const content = `<g class="p63lpxbhg"><path class="gxnzrob6v"/><path class="tkq46hbva"/><path class="l75xwsb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:take-two"} {...others} />);
}

export default Component;
