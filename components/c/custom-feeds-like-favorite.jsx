import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lgcr7z-tq.css';
import '../../css/f/fbxx0s4hl.css';
import '../../css/z/zt1-qcivb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lgcr7z-tq"/><path class="fbxx0s4hl"/><path class="zt1-qcivb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:custom-feeds-like-favorite"} {...others} />);
}

export default Component;
