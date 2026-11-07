import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e3z8dsbjk.css';
import '../../css/q/q26lahbif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e3z8dsbjk"/><path class="q26lahbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:cover"} {...others} />);
}

export default Component;
