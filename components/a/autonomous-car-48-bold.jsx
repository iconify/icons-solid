import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re49p_baz.css';
import '../../css/s/sxankrbtm.css';
import '../../css/u/u574l7bmp.css';
import '../../css/a/a8upazg4t.css';
import '../../css/m/msgw5gbys.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="re49p_baz"/><path class="sxankrbtm"/><path class="u574l7bmp"/><path class="a8upazg4t"/><path class="msgw5gbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:autonomous-car-48-bold"} {...others} />);
}

export default Component;
