import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg515_j0x.css';
import '../../css/g/go55dbb3w.css';
import '../../css/s/sr3x7wrjy.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="sg515_j0x"/><path class="go55dbb3w"/><path class="sr3x7wrjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:minimize"} {...others} />);
}

export default Component;
