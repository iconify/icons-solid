import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrfs08bjl.css';
import '../../css/h/h999mzfzw.css';
import '../../css/p/pu-os2bbu.css';
import '../../css/c/c5wpdllfh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qrfs08bjl"/><path class="h999mzfzw"/><path class="pu-os2bbu"/><path class="c5wpdllfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:synchronize"} {...others} />);
}

export default Component;
