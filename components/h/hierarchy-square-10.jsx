import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fyq5n8b7t.css';
import '../../css/x/xtfl08bxn.css';
import '../../css/a/aqxq3ddkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fyq5n8b7t"/><path class="xtfl08bxn"/><path class="aqxq3ddkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hierarchy-square-10"} {...others} />);
}

export default Component;
