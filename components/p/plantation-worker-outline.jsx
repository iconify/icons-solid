import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldmvh3b6l.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ldmvh3b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:plantation-worker-outline"} {...others} />);
}

export default Component;
