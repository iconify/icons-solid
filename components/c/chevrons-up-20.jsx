import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8i01qb4b.css';
import '../../css/z/z5m9jtb4y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n8i01qb4b"/><path class="z5m9jtb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-up-20"} {...others} />);
}

export default Component;
