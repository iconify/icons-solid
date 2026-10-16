import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/japh1-c2n.css';
import '../../css/q/qhxqg70ep.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="japh1-c2n"/><path class="qhxqg70ep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-search-20-bold"} {...others} />);
}

export default Component;
