import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0kz23gan.css';
import '../../css/b/b56fliz5r.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k0kz23gan"/><path class="b56fliz5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:materialui"} {...others} />);
}

export default Component;
