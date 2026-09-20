import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e9kwfkb1m.css';
import '../../css/z/zkrreabxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e9kwfkb1m"/><path class="zkrreabxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:shipping-box-1"} {...others} />);
}

export default Component;
