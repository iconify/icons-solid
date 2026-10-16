import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htj3nfw-e.css';
import '../../css/j/j7_rlpeei.css';
import '../../css/l/l0y6lzb4j.css';
import '../../css/z/zy1xykqjv.css';
import '../../css/h/hy9iaxbav.css';
import '../../css/r/rxwd8ne9v.css';
import '../../css/x/xn3okbc6v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="htj3nfw-e"/><path class="j7_rlpeei"/><path class="l0y6lzb4j"/><path class="zy1xykqjv"/><path class="hy9iaxbav"/><path class="rxwd8ne9v"/><path class="xn3okbc6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mangrove-48-bold"} {...others} />);
}

export default Component;
