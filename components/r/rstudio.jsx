import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_32mb0cg.css';
import '../../css/q/qsse9abge.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q_32mb0cg"/><path class="qsse9abge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:rstudio"} {...others} />);
}

export default Component;
