import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iwbjmpb4h.css';
import '../../css/d/d6lqux7jy.css';
import '../../css/j/ju36qx2re.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iwbjmpb4h"/><path class="d6lqux7jy"/><path class="ju36qx2re"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paintbrush-vertical"} {...others} />);
}

export default Component;
