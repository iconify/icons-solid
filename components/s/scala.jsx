import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md7chzk7w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="md7chzk7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:scala"} {...others} />);
}

export default Component;
