import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cja52ub9p.css';
import '../../css/x/xe9zg8buj.css';
import '../../css/k/ka2xwu2vh.css';
import '../../css/z/zbzgx-vnx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cja52ub9p"/><path class="xe9zg8buj"/><path class="ka2xwu2vh"/><path class="zbzgx-vnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sliders-48-bold"} {...others} />);
}

export default Component;
