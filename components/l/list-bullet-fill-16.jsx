import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn-fd_bpy.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nehzp4d4n.css';
import '../../css/o/o_45fb3ek.css';
import '../../css/g/g9ke79bbm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bn-fd_bpy"/><g class="cuyn6tgcc"><circle class="nehzp4d4n"/><circle class="o_45fb3ek"/><circle class="g9ke79bbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:list-bullet-fill-16"} {...others} />);
}

export default Component;
