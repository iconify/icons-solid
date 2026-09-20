import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/lo-nv6bwr.css';
import '../../css/c/cekehdbnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="lo-nv6bwr"/><path class="cekehdbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:arrow-cursor-move"} {...others} />);
}

export default Component;
