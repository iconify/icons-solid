import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj0jmcbek.css';
import '../../css/r/r9q98mbhp.css';
import '../../css/b/b5c6v2bhg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dj0jmcbek"/><path class="r9q98mbhp"/><path class="b5c6v2bhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:leaf"} {...others} />);
}

export default Component;
