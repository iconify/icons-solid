import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z-datbeqm.css';
import '../../css/c/cjy01ac5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="z-datbeqm"/><path class="cjy01ac5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:heart"} {...others} />);
}

export default Component;
