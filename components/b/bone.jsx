import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/omztqcrvs.css';
import '../../css/j/jlgpy20cj.css';
import '../../css/e/eoehlug1a.css';
import '../../css/k/k2qf7syyc.css';
import '../../css/w/weu-k5bgx.css';
import '../../css/u/u-bxkwb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="omztqcrvs wm-shadow"/><path class="jlgpy20cj"/><path class="eoehlug1a"/><path class="k2qf7syyc"/><path class="weu-k5bgx"/><path class="u-bxkwb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bone"} {...others} />);
}

export default Component;
