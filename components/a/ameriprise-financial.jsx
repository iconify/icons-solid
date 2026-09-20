import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruvm3x1xl.css';
import '../../css/o/onte_6xom.css';
import '../../css/l/l8asgib-f.css';

const viewBox = {"width":73.721,"height":25.069};
const content = `<g class="ruvm3x1xl"><path class="onte_6xom"/><path class="l8asgib-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ameriprise-financial"} {...others} />);
}

export default Component;
