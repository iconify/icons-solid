import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wq43hzbih.css';
import '../../css/h/hjhzq3jzu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="wq43hzbih"/><path class="hjhzq3jzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:refraction"} {...others} />);
}

export default Component;
