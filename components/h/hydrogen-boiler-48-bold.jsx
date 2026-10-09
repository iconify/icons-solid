import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zanasbbem.css';
import '../../css/d/dgdz7cczj.css';
import '../../css/j/jvxstphxd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zanasbbem"/><path class="dgdz7cczj"/><path class="jvxstphxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-boiler-48-bold"} {...others} />);
}

export default Component;
