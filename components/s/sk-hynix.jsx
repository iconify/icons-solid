import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgxjr8bkm.css';
import '../../css/c/c7tsg_bsl.css';
import '../../css/v/v8ieag9dc.css';

const viewBox = {"width":28.453,"height":15.028};
const content = `<g class="pgxjr8bkm"><path class="c7tsg_bsl"/><path class="v8ieag9dc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sk-hynix"} {...others} />);
}

export default Component;
