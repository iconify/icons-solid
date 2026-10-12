import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7go70bac.css';
import '../../css/d/d24t00g2w.css';
import '../../css/w/w2duh05jb.css';
import '../../css/c/c0embfb_h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f7go70bac"/><path class="d24t00g2w"/><path class="w2duh05jb"/><path class="c0embfb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microscope-20"} {...others} />);
}

export default Component;
