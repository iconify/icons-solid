import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aluxljm0d.css';
import '../../css/o/o-ne_gbfr.css';
import '../../css/u/uhbewfbar.css';
import '../../css/e/emv-tb2gr.css';
import '../../css/j/ju-z55bmk.css';
import '../../css/s/s9n9tuduz.css';
import '../../css/f/furh57awb.css';
import '../../css/w/w0bit4b5z.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="aluxljm0d"><path clip-rule="evenodd" class="o-ne_gbfr"/><circle class="uhbewfbar"/><circle class="emv-tb2gr"/><circle class="ju-z55bmk"/><circle class="s9n9tuduz"/><circle class="furh57awb"/><circle class="w0bit4b5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:graphql"} {...others} />);
}

export default Component;
