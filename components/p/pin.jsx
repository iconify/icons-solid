import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm7uaeb1c.css';
import '../../css/t/tc3e2jyph.css';
import '../../css/l/l0ij5ccyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="rm7uaeb1c"><path class="tc3e2jyph"/><path class="l0ij5ccyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:pin"} {...others} />);
}

export default Component;
