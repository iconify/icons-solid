import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ymwuqkrmm.css';
import '../../css/m/mdnzfy8ny.css';
import '../../css/a/ahhqo1b4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ymwuqkrmm"/><path class="mdnzfy8ny"/><path class="ahhqo1b4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pen-off-sharp-duotone"} {...others} />);
}

export default Component;
