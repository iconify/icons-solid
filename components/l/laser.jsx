import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu06nbbze.css';
import '../../css/y/ynvzr33or.css';
import '../../css/o/o88qfn09d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="eu06nbbze"/><path class="ynvzr33or"/><path class="o88qfn09d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:laser"} {...others} />);
}

export default Component;
