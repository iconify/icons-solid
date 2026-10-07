import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/te-uuxths.css';
import '../../css/k/k6hcqfbva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="te-uuxths"/><path class="k6hcqfbva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:symbol"} {...others} />);
}

export default Component;
