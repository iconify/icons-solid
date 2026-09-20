import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jaaxpcc_n.css';
import '../../css/o/o44440b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jaaxpcc_n"/><path class="o44440b6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:browser-error"} {...others} />);
}

export default Component;
