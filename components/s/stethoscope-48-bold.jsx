import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixi9bvbgc.css';
import '../../css/e/eqftyninf.css';
import '../../css/g/gc8-e8__z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ixi9bvbgc"/><path class="eqftyninf"/><path class="gc8-e8__z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stethoscope-48-bold"} {...others} />);
}

export default Component;
