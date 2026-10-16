import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loa2wvbos.css';
import '../../css/a/a2tuuobyg.css';
import '../../css/w/wv3plmbie.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="loa2wvbos"/><path class="a2tuuobyg"/><path class="wv3plmbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cctv-20-bold"} {...others} />);
}

export default Component;
