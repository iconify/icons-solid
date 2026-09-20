import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw65b8bpj.css';
import '../../css/n/n1agmhbve.css';
import '../../css/j/jmlz6ybsa.css';
import '../../css/u/utx684bng.css';

const viewBox = {"width":256,"height":296};
const content = `<path class="pw65b8bpj"/><path class="n1agmhbve"/><path class="jmlz6ybsa"/><path class="utx684bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:chartdotjs"} {...others} />);
}

export default Component;
