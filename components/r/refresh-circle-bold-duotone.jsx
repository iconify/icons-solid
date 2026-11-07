import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrxlgg64z.css';
import '../../css/p/pwgp6wb0l.css';
import '../../css/g/gw5xq8brv.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="hrxlgg64z"/><path class="pwgp6wb0l"/><path class="gw5xq8brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-circle-bold-duotone"} {...others} />);
}

export default Component;
