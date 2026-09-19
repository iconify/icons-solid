import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v9ph1l8bd.css';
import '../../css/c/chjde-bsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v9ph1l8bd"/><path class="chjde-bsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:comp-align-top"} {...others} />);
}

export default Component;
