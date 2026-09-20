import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vxy6qccrw.css';
import '../../css/p/phcqvyl7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vxy6qccrw"/><path class="phcqvyl7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:warehouse-1"} {...others} />);
}

export default Component;
