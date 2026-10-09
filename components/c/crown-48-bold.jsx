import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4vc4jmhp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z4vc4jmhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crown-48-bold"} {...others} />);
}

export default Component;
