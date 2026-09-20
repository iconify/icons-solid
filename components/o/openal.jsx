import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2wr9wc8g.css';
import '../../css/n/nn222kb7f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l2wr9wc8g"/><path class="nn222kb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openal"} {...others} />);
}

export default Component;
