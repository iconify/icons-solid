import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dp5dwpbbf.css';
import '../../css/u/ur1fn0ckq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><circle class="dp5dwpbbf"/><path class="ur1fn0ckq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-26"} {...others} />);
}

export default Component;
