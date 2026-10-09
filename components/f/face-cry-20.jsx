import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/b/bc6ktqbxa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="bc6ktqbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-cry-20"} {...others} />);
}

export default Component;
