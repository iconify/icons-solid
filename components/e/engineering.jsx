import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7953m5_e.css';
import '../../css/c/cfri2bcju.css';
import '../../css/k/kzrfz6b7a.css';
import '../../css/s/sh2vre-yh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g7953m5_e"/><g class="cfri2bcju"><path class="kzrfz6b7a"/><path class="sh2vre-yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:engineering"} {...others} />);
}

export default Component;
