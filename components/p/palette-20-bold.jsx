import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbzbio0ay.css';
import '../../css/p/pbl0q7bew.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gbzbio0ay"/><path class="pbl0q7bew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:palette-20-bold"} {...others} />);
}

export default Component;
