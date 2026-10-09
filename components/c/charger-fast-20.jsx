import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr0clkknd.css';
import '../../css/n/nevhvhrth.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zr0clkknd"/><path class="nevhvhrth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-fast-20"} {...others} />);
}

export default Component;
