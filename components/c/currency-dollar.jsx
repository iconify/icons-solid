import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pn4sus4me.css';
import '../../css/q/q6dgyrq9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path vector-effect="non-scaling-stroke" class="pn4sus4me"/><path vector-effect="non-scaling-stroke" class="q6dgyrq9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:currency-dollar"} {...others} />);
}

export default Component;
