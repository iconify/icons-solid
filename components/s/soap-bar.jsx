import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gc0o2bbci.css';
import '../../css/h/he1161fvk.css';
import '../../css/p/p5b-gehrh.css';
import '../../css/u/u5-i9hbwd.css';
import '../../css/x/xsyafvyim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gc0o2bbci"/><path class="he1161fvk"/><circle class="p5b-gehrh"/><circle class="u5-i9hbwd"/><path class="xsyafvyim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:soap-bar"} {...others} />);
}

export default Component;
