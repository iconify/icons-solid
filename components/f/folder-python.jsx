import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phu1k1bve.css';
import '../../css/i/irkldebla.css';
import '../../css/l/lbwm2mbrh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="phu1k1bve"/><path class="irkldebla"/><path class="lbwm2mbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-python"} {...others} />);
}

export default Component;
