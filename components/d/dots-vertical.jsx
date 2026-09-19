import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwa9t1wyp.css';
import '../../css/s/skr69mb3d.css';
import '../../css/k/k5jnlg1dk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><rect class="fwa9t1wyp"/><rect class="skr69mb3d"/><rect class="k5jnlg1dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:dots-vertical"} {...others} />);
}

export default Component;
