import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxx9g-boz.css';
import '../../css/e/elto8jbuv.css';
import '../../css/d/dysie4bua.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uxx9g-boz"/><path class="elto8jbuv"/><path class="dysie4bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vector-pen-20"} {...others} />);
}

export default Component;
