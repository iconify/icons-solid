import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5vpx869x.css';
import '../../css/c/cjykg8bjw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r5vpx869x"/><path class="cjykg8bjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:subsea-cable-48"} {...others} />);
}

export default Component;
