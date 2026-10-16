import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tixg4gbgk.css';
import '../../css/o/ox2_dgbyg.css';
import '../../css/c/cgo_eslee.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tixg4gbgk"/><path class="ox2_dgbyg"/><path class="cgo_eslee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-search-20"} {...others} />);
}

export default Component;
