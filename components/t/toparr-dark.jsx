import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pufzmmx5m.css';
import '../../css/n/ngmlb0b9f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pufzmmx5m"/><path class="ngmlb0b9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:toparr-dark"} {...others} />);
}

export default Component;
