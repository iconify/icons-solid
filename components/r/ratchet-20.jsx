import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw6dnvbbs.css';
import '../../css/e/e2qan-08h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hw6dnvbbs"/><path class="e2qan-08h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ratchet-20"} {...others} />);
}

export default Component;
