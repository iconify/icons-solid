import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pzijs_b6t.css';
import '../../css/m/m1h3ldbdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pzijs_b6t"/><path class="m1h3ldbdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:presentation"} {...others} />);
}

export default Component;
