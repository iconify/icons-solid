import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fec4cjbkq.css';
import '../../css/o/ol1pcwf7g.css';
import '../../css/e/ecvl1ebjn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fec4cjbkq"/><path class="ol1pcwf7g"/><path class="ecvl1ebjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:x-square-20-bold"} {...others} />);
}

export default Component;
