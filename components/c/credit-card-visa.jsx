import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xouclibnd.css';
import '../../css/a/as9pofblp.css';
import '../../css/a/ab4c95btg.css';
import '../../css/l/lx5km0kem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xouclibnd"/><path class="as9pofblp"/><path class="ab4c95btg"/><path class="lx5km0kem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:credit-card-visa"} {...others} />);
}

export default Component;
