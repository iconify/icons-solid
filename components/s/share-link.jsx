import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwd3hkmvj.css';
import '../../css/q/qdgs54bms.css';
import '../../css/n/nyf574b-x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cwd3hkmvj"/><path class="qdgs54bms"/><path class="nyf574b-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:share-link"} {...others} />);
}

export default Component;
