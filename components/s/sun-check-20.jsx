import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8nww4mnw.css';
import '../../css/m/mg--uz6gi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n8nww4mnw"/><path class="mg--uz6gi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-check-20"} {...others} />);
}

export default Component;
