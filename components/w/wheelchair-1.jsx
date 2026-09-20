import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxj6pdbgo.css';
import '../../css/k/kgd98phob.css';
import '../../css/r/r3hw_yb3n.css';
import '../../css/o/ohvme3bky.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bxj6pdbgo"/><path class="kgd98phob"/><path class="r3hw_yb3n"/><path class="ohvme3bky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:wheelchair-1"} {...others} />);
}

export default Component;
