import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/q/q5a2teajs.css';
import '../../css/o/o7l51rbax.css';
import '../../css/i/ituo-kbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle transform="rotate(-90 12 7)" class="q5a2teajs"/><circle transform="rotate(-90 12 12)" class="o7l51rbax"/><path class="ituo-kbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bowling-line-duotone"} {...others} />);
}

export default Component;
