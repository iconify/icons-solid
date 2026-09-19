import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pghkohbzn.css';
import '../../css/f/f8-p491gh.css';
import '../../css/k/kbd990bxg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><circle class="pghkohbzn"/><circle class="f8-p491gh"/><path class="kbd990bxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-group-fill-16"} {...others} />);
}

export default Component;
