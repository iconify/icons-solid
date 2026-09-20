import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/f/fpplqm36s.css';
import '../../css/i/iw-i4sbah.css';
import '../../css/e/ehethac0h.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGNwzqUXRl"><g class="ukm9jj2re"><path class="fpplqm36s"/><path class="iw-i4sbah"/><path class="ehethac0h"/></g></mask></defs><path mask="url(#SVGNwzqUXRl)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-alt-duotone"} {...others} />);
}

export default Component;
