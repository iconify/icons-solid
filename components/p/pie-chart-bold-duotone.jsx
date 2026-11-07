import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw6cz2bya.css';
import '../../css/g/gussmibdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hw6cz2bya"/><path class="gussmibdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pie-chart-bold-duotone"} {...others} />);
}

export default Component;
