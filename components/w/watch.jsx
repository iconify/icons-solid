import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/of5d_kfxw.css';
import '../../css/e/eg-4hjbbz.css';
import '../../css/f/fk3p7xb2s.css';
import '../../css/e/ejjn8hi1g.css';
import '../../css/s/sk4_slj0s.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="of5d_kfxw"/><path class="eg-4hjbbz"/><path class="fk3p7xb2s"/><path class="ejjn8hi1g"/><path class="sk4_slj0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:watch"} {...others} />);
}

export default Component;
