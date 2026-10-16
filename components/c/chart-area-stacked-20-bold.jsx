import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w01dflzvf.css';
import '../../css/b/b6wxp1uvp.css';
import '../../css/u/u5jabkb_n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w01dflzvf"/><path class="b6wxp1uvp"/><path class="u5jabkb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-area-stacked-20-bold"} {...others} />);
}

export default Component;
