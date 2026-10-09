import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie3v5gb6w.css';
import '../../css/k/k4oej8buw.css';
import '../../css/h/h1qcumj4c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ie3v5gb6w"/><path class="k4oej8buw"/><path class="h1qcumj4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whisk-20"} {...others} />);
}

export default Component;
