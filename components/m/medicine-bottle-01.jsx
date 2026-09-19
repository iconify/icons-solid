import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y3hguvblu.css';
import '../../css/x/xvyy05bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y3hguvblu"/><path class="xvyy05bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medicine-bottle-01"} {...others} />);
}

export default Component;
