import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6ajr_bsq.css';
import '../../css/u/ufvpeacwp.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="f6ajr_bsq"/><path clip-rule="evenodd" class="ufvpeacwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:arrow-right-circle"} {...others} />);
}

export default Component;
