import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zx5zbbcme.css';
import '../../css/c/ckklebgfu.css';
import '../../css/w/wwfotzu4b.css';
import '../../css/m/muh-rwynb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zx5zbbcme"/><path class="ckklebgfu"/><path class="wwfotzu4b"/><path class="muh-rwynb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gem-duotone"} {...others} />);
}

export default Component;
