import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1kqx6-cc.css';
import '../../css/c/cgk8zus5u.css';
import '../../css/s/soligzbuu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="x1kqx6-cc"/><path class="cgk8zus5u"/><path class="soligzbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:heart-rate-pulse-graph"} {...others} />);
}

export default Component;
