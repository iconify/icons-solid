import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qob3urb3w.css';
import '../../css/z/zkc3a6ybf.css';
import '../../css/u/u01duyblj.css';
import '../../css/c/c5xbzriem.css';
import '../../css/g/gpd43zbld.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qob3urb3w"/><path class="zkc3a6ybf"/><path class="u01duyblj"/><path class="c5xbzriem"/><path class="gpd43zbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-sink-20"} {...others} />);
}

export default Component;
