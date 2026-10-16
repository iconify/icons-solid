import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_3tybcwd.css';
import '../../css/u/u3mp5lqgi.css';
import '../../css/x/x-3aazb-g.css';
import '../../css/e/enwjp7ebc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l_3tybcwd"/><path class="u3mp5lqgi"/><path class="x-3aazb-g"/><path class="enwjp7ebc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-treemap-20-bold"} {...others} />);
}

export default Component;
