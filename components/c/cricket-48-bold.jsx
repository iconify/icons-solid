import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_721kb1n.css';
import '../../css/k/k1mcwabef.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o_721kb1n"/><path class="k1mcwabef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cricket-48-bold"} {...others} />);
}

export default Component;
