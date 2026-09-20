import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/el2l9w6ms.css';
import '../../css/b/bv3_8-wev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="el2l9w6ms"/><path class="bv3_8-wev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:strongbox"} {...others} />);
}

export default Component;
