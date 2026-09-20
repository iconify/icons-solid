import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/p5smuv1fx.css';
import '../../css/i/il0pwlb6n.css';
import '../../css/z/zimgjfjhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect transform="rotate(90 9 15)" class="p5smuv1fx"/><path class="il0pwlb6n"/><path class="zimgjfjhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:line-out-alt-light"} {...others} />);
}

export default Component;
