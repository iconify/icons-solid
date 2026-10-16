import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr4vd1rvr.css';
import '../../css/k/k16_ngbvw.css';
import '../../css/v/vlj26f7td.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wr4vd1rvr"/><path class="k16_ngbvw"/><path class="vlj26f7td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-input-48"} {...others} />);
}

export default Component;
