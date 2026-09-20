import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sybczbbpf.css';
import '../../css/u/uw18y9boo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="sybczbbpf"/><path class="uw18y9boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:comments-outline"} {...others} />);
}

export default Component;
