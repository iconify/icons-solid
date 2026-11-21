import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d_djo3b2e.css';
import '../../css/k/k5lxk7bym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d_djo3b2e"/><path class="k5lxk7bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:update"} {...others} />);
}

export default Component;
