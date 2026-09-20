import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbgvmfb1y.css';
import '../../css/e/eeolu18wj.css';
import '../../css/a/ah6qpw38g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mbgvmfb1y"/><path class="eeolu18wj"/><path class="ah6qpw38g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:colour-tuneing-bold-duotone"} {...others} />);
}

export default Component;
