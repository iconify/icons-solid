import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8mp0wbzm.css';
import '../../css/d/dwl2-5bwr.css';
import '../../css/u/unf30navr.css';
import '../../css/z/zrr3btyck.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m8mp0wbzm"/><path class="dwl2-5bwr"/><path class="unf30navr"/><path class="zrr3btyck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-storage-48"} {...others} />);
}

export default Component;
