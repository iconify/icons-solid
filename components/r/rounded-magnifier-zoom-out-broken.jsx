import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yfn9xdb5n.css';
import '../../css/j/jjar52fez.css';
import '../../css/k/kz1lj24gh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yfn9xdb5n"/><path class="jjar52fez"/><path class="kz1lj24gh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-zoom-out-broken"} {...others} />);
}

export default Component;
