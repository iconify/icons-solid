import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezhonm73e.css';
import '../../css/k/k2af-4bql.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ezhonm73e"/><path class="k2af-4bql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-code-20"} {...others} />);
}

export default Component;
