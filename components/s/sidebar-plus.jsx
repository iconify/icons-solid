import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud500m9zk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ud500m9zk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:sidebar-plus"} {...others} />);
}

export default Component;
