import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2-3n8bey.css';
import '../../css/q/q7a8l0b_f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a2-3n8bey"/><path class="q7a8l0b_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiation-20"} {...others} />);
}

export default Component;
