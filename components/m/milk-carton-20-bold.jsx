import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0i2p1bpi.css';
import '../../css/y/y0hffi4py.css';
import '../../css/z/zafs9vb2h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n0i2p1bpi"/><path class="y0hffi4py"/><path class="zafs9vb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:milk-carton-20-bold"} {...others} />);
}

export default Component;
