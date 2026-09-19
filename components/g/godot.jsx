import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4kmxzbqa.css';
import '../../css/m/m2awv3b3q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l4kmxzbqa"/><path class="m2awv3b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:godot"} {...others} />);
}

export default Component;
