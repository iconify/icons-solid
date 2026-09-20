import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o-g10y6fs.css';
import '../../css/i/i850ewbir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o-g10y6fs"/><path class="i850ewbir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:firework-2"} {...others} />);
}

export default Component;
