import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n38oa1brm.css';
import '../../css/j/jvsnevb9a.css';
import '../../css/p/p5ishgb2d.css';
import '../../css/n/nr3gxq-ks.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="n38oa1brm"/><path class="jvsnevb9a"/><path class="p5ishgb2d"/><path class="nr3gxq-ks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:strawberry"} {...others} />);
}

export default Component;
