import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dctwlj4pp.css';
import '../../css/m/m43kh5boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dctwlj4pp"/><path class="m43kh5boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dogecoin-circle"} {...others} />);
}

export default Component;
