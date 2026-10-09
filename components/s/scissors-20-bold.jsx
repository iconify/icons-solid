import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp1m28b3m.css';
import '../../css/c/cm9yy8b4y.css';
import '../../css/w/wbx0tpvjg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tp1m28b3m"/><path class="cm9yy8b4y"/><path class="wbx0tpvjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scissors-20-bold"} {...others} />);
}

export default Component;
