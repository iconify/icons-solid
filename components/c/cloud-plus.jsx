import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t73_t6bky.css';
import '../../css/o/odjrbuxck.css';
import '../../css/l/l6_zgob8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t73_t6bky"/><path class="odjrbuxck"/><path class="l6_zgob8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-plus"} {...others} />);
}

export default Component;
