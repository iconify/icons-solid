import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwi-_4bjb.css';
import '../../css/n/no332ubsu.css';
import '../../css/y/ygz8ri58s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cwi-_4bjb"/><path class="no332ubsu"/><path class="ygz8ri58s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:potentiometer-48-bold"} {...others} />);
}

export default Component;
