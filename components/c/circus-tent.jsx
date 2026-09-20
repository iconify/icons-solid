import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/crn6gciva.css';
import '../../css/s/s80r0dgik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="crn6gciva"/><path class="s80r0dgik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:circus-tent"} {...others} />);
}

export default Component;
