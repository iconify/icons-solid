import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/coxf6bb6r.css';
import '../../css/b/b7cp9xema.css';
import '../../css/z/z0tdu3owt.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="coxf6bb6r"/><path class="b7cp9xema"/><path class="z0tdu3owt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:floppy-disks"} {...others} />);
}

export default Component;
