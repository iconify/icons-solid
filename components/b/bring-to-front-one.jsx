import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zr3aj01_m.css';
import '../../css/d/d2bzl5g0c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zr3aj01_m"/><path class="d2bzl5g0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bring-to-front-one"} {...others} />);
}

export default Component;
