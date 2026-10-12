import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_9t_z5eb.css';
import '../../css/k/k6i9o7bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t_9t_z5eb"/><path class="k6i9o7bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bell-check-filled"} {...others} />);
}

export default Component;
