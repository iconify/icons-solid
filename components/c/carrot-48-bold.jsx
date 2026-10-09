import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqvc5e6rz.css';
import '../../css/f/fdjv-dbll.css';
import '../../css/n/n9rim1bvv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eqvc5e6rz"/><path class="fdjv-dbll"/><path class="n9rim1bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carrot-48-bold"} {...others} />);
}

export default Component;
