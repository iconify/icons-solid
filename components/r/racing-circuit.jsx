import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/raknlubrl.css';
import '../../css/s/s0terdbrq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="raknlubrl"/><path class="s0terdbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:racing-circuit"} {...others} />);
}

export default Component;
