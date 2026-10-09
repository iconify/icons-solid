import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvc9z5wej.css';
import '../../css/d/df3f56xlz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gvc9z5wej"/><path class="df3f56xlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cactus-48-bold"} {...others} />);
}

export default Component;
