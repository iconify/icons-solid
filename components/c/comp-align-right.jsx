import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l6tbdz50i.css';
import '../../css/v/v4byqjbey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l6tbdz50i"/><path class="v4byqjbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:comp-align-right"} {...others} />);
}

export default Component;
