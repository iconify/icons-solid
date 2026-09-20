import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u14w9_p_l.css';
import '../../css/c/c_mpk-b8s.css';
import '../../css/a/akfktzbbg.css';
import '../../css/h/h1kg4daid.css';

const viewBox = {"width":209.466,"height":207.096};
const content = `<path class="u14w9_p_l"/><path class="c_mpk-b8s"/><path class="akfktzbbg"/><path class="h1kg4daid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vercel-blob"} {...others} />);
}

export default Component;
