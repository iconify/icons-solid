import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbd13vizc.css';
import '../../css/i/imtkfjwmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jbd13vizc"/><path class="imtkfjwmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drilling-rig-20"} {...others} />);
}

export default Component;
