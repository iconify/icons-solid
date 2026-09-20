import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5hrsgbgc.css';
import '../../css/n/nt4buzbis.css';
import '../../css/j/js3xanbeo.css';

const viewBox = {"width":1540,"height":1520};
const content = `<path class="x5hrsgbgc"/><path class="nt4buzbis"/><path class="js3xanbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:global-power-synergy"} {...others} />);
}

export default Component;
