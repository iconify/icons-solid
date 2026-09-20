import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4mym1_0y.css';
import '../../css/l/ln6rcys8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y4mym1_0y"/><path class="ln6rcys8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:money-bill"} {...others} />);
}

export default Component;
