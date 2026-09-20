import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eislsacga.css';
import '../../css/h/hmcun9bjd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eislsacga"/><path class="hmcun9bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:dribbble-solid"} {...others} />);
}

export default Component;
