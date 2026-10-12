import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxewc1esa.css';
import '../../css/s/sf8jnqbzj.css';
import '../../css/q/q7vyh3bas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zxewc1esa"/><path class="sf8jnqbzj"/><path class="q7vyh3bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lamp-wall-down-duotone"} {...others} />);
}

export default Component;
