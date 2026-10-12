import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr5ofoi5l.css';
import '../../css/u/u0d4ys4cz.css';
import '../../css/g/goaubd3xt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lr5ofoi5l"/><path class="u0d4ys4cz"/><path class="goaubd3xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:syringe-48-bold"} {...others} />);
}

export default Component;
