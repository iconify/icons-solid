import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/byp4rtb1l.css';
import '../../css/d/ds04a6xpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="byp4rtb1l"/><path class="ds04a6xpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:volume-low"} {...others} />);
}

export default Component;
