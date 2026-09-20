import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw0w95kpx.css';
import '../../css/b/b1gwc0q-o.css';
import '../../css/y/ymyomxbux.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="rw0w95kpx"/><path class="b1gwc0q-o"/><path class="ymyomxbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:chart"} {...others} />);
}

export default Component;
