import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flebhl8-j.css';
import '../../css/i/ioxwpib4x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="flebhl8-j"/><path class="ioxwpib4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:notebook-20"} {...others} />);
}

export default Component;
