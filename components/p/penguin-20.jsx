import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l94gcsbcw.css';
import '../../css/m/m79wssnno.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l94gcsbcw"/><path class="m79wssnno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:penguin-20"} {...others} />);
}

export default Component;
