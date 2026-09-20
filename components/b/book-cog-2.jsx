import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/o/ovk3uccge.css';
import '../../css/k/k0rtyzb9v.css';
import '../../css/z/zefgd9r0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="ovk3uccge"/><path class="k0rtyzb9v"/><path class="zefgd9r0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:book-cog-2"} {...others} />);
}

export default Component;
