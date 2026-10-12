import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah8go7bph.css';
import '../../css/u/uhv6q9tdz.css';
import '../../css/n/nu1ky11cm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ah8go7bph"/><path class="uhv6q9tdz"/><path class="nu1ky11cm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:triangle-alert-duotone"} {...others} />);
}

export default Component;
