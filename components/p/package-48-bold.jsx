import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cexdorbqf.css';
import '../../css/l/l0e6trbdo.css';
import '../../css/a/aqt55lrii.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cexdorbqf"/><path class="l0e6trbdo"/><path class="aqt55lrii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-48-bold"} {...others} />);
}

export default Component;
