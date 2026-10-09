import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3p0zqbmw.css';
import '../../css/b/bl9mhqw5o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b3p0zqbmw"/><path class="bl9mhqw5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pool-48-bold"} {...others} />);
}

export default Component;
