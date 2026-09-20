import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pmr8bmynq.css';
import '../../css/e/e_679sgrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="pmr8bmynq"/><path class="e_679sgrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:syringe"} {...others} />);
}

export default Component;
