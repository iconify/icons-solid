import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wt5yy9frr.css';
import '../../css/q/qi2p1ob0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="to-5kdesz"><path class="wt5yy9frr"/><path class="qi2p1ob0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:stumble-upong-1ing-logo"} {...others} />);
}

export default Component;
