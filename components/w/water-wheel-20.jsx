import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmwikhbug.css';
import '../../css/e/ekooj0b0b.css';
import '../../css/b/bvbkw3bso.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tmwikhbug"/><path class="ekooj0b0b"/><path class="bvbkw3bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-wheel-20"} {...others} />);
}

export default Component;
