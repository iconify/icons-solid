import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5lttmq7g.css';
import '../../css/n/n6jo5gq3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5lttmq7g"/><path class="n6jo5gq3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wad-of-money-bold-duotone"} {...others} />);
}

export default Component;
