import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc9y20byl.css';
import '../../css/p/p4w9xabzc.css';
import '../../css/k/ki0n9xumn.css';
import '../../css/d/d1_f_v9ty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bc9y20byl"/><path class="p4w9xabzc"/><path class="ki0n9xumn"/><path class="d1_f_v9ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:signal"} {...others} />);
}

export default Component;
