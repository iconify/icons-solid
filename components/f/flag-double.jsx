import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0zvpfb6v.css';
import '../../css/f/fuc2tybyp.css';
import '../../css/c/c2qod68bl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p0zvpfb6v"/><path class="fuc2tybyp"/><path class="c2qod68bl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:flag-double"} {...others} />);
}

export default Component;
