import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uq9jx2m6e.css';
import '../../css/d/dfaqi5b4x.css';
import '../../css/n/nvxia9buc.css';
import '../../css/u/uy2i3ccvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uq9jx2m6e"/><circle class="dfaqi5b4x"/><circle class="nvxia9buc"/><circle class="uy2i3ccvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:crown"} {...others} />);
}

export default Component;
