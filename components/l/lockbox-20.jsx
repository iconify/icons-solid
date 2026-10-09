import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axles5bjl.css';
import '../../css/g/guuynvblh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="axles5bjl"/><path class="guuynvblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lockbox-20"} {...others} />);
}

export default Component;
