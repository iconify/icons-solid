import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q6dgyrq9a.css';
import '../../css/i/i7iqbpbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path vector-effect="non-scaling-stroke" class="q6dgyrq9a"/><path vector-effect="non-scaling-stroke" class="i7iqbpbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:currency-euro"} {...others} />);
}

export default Component;
