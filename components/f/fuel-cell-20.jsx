import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4ztp3ont.css';
import '../../css/w/w093ptm_d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u4ztp3ont"/><path class="w093ptm_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-cell-20"} {...others} />);
}

export default Component;
