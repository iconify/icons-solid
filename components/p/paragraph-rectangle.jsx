import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k-t__0bsb.css';
import '../../css/a/a0687pqrc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="k-t__0bsb"/><path class="a0687pqrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:paragraph-rectangle"} {...others} />);
}

export default Component;
