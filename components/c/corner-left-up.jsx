import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hjlgkqaeu.css';
import '../../css/s/s-ocusbci.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hjlgkqaeu"/><path class="s-ocusbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:corner-left-up"} {...others} />);
}

export default Component;
