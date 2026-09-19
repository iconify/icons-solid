import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/z/z8zqpmn2r.css';
import '../../css/i/iwigt5yon.css';
import '../../css/f/fxua7fbvr.css';
import '../../css/z/zt-gf2bwd.css';
import '../../css/q/q9gq8bx0v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="z8zqpmn2r"/><path class="iwigt5yon"/><path class="fxua7fbvr"/><path class="zt-gf2bwd"/><path class="q9gq8bx0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:power-supply"} {...others} />);
}

export default Component;
