import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nwwi13bel.css';
import '../../css/h/hdmtrbbqv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="nwwi13bel"/><path class="hdmtrbbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:shopping-bag"} {...others} />);
}

export default Component;
