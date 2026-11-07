import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjmcju-mi.css';
import '../../css/p/pvhv_7sne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjmcju-mi"/><path class="pvhv_7sne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:power-bold-duotone"} {...others} />);
}

export default Component;
