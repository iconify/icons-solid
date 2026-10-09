import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lae2_dgov.css';
import '../../css/z/znm6bw41g.css';
import '../../css/i/iiq2hgbgs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lae2_dgov"/><path class="znm6bw41g"/><path class="iiq2hgbgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-up-20"} {...others} />);
}

export default Component;
