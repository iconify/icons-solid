import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpqqzrelk.css';
import '../../css/m/m-ue7vdss.css';
import '../../css/b/b4s-c3b0z.css';
import '../../css/c/cgo_eslee.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hpqqzrelk"/><path class="m-ue7vdss"/><path class="b4s-c3b0z"/><path class="cgo_eslee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-search-20"} {...others} />);
}

export default Component;
