import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w6_b8q_9v.css';
import '../../css/r/rvuj5tb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="w6_b8q_9v"/><rect class="rvuj5tb-l"/><rect class="rvuj5tb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pagination-light"} {...others} />);
}

export default Component;
