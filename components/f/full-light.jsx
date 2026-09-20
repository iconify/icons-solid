import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpk_m-oiv.css';
import '../../css/q/qhbzephbs.css';
import '../../css/y/ydp0b-b3w.css';
import '../../css/c/cu0gh7bha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpk_m-oiv"/><path class="qhbzephbs"/><path class="ydp0b-b3w"/><path class="cu0gh7bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:full-light"} {...others} />);
}

export default Component;
