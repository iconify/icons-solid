import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egmmgub_l.css';
import '../../css/u/u1hnyj58h.css';
import '../../css/b/b5hlbebng.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="egmmgub_l"/><path class="u1hnyj58h"/><path class="b5hlbebng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:time-of-use-20-bold"} {...others} />);
}

export default Component;
