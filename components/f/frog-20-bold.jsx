import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwnv2zbmo.css';
import '../../css/q/q0rdytb4g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jwnv2zbmo"/><path class="q0rdytb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frog-20-bold"} {...others} />);
}

export default Component;
