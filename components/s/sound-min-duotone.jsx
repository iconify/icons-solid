import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yx57vmbbs.css';
import '../../css/g/g2an002hv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="yx57vmbbs"/><path class="g2an002hv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sound-min-duotone"} {...others} />);
}

export default Component;
