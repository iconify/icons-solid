import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t74_ogbzo.css';
import '../../css/y/ykv4cf_5b.css';
import '../../css/g/gmorbsb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t74_ogbzo"/><path class="ykv4cf_5b"/><path class="gmorbsb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:dumbbell-duotone"} {...others} />);
}

export default Component;
