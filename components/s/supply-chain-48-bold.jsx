import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9t92f57g.css';
import '../../css/c/c81pk53il.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l9t92f57g"/><path class="c81pk53il"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supply-chain-48-bold"} {...others} />);
}

export default Component;
