import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jpk7rbbjw.css';
import '../../css/e/efdwq-jsz.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="ft5dv1b6b"><path class="jpk7rbbjw"/><path class="efdwq-jsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gram"} {...others} />);
}

export default Component;
