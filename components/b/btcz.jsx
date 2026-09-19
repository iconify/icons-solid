import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zs0dngb7n.css';
import '../../css/q/q846f4beg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="zs0dngb7n"/><path class="q846f4beg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:btcz"} {...others} />);
}

export default Component;
