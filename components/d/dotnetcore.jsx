import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtropbt-f.css';
import '../../css/h/hal2ihy4e.css';
import '../../css/o/o42u20lrm.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="wtropbt-f"><path class="hal2ihy4e"/><path class="o42u20lrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dotnetcore"} {...others} />);
}

export default Component;
