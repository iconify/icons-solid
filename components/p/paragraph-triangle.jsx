import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k-t__0bsb.css';
import '../../css/d/druu84bew.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="k-t__0bsb"/><path class="druu84bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:paragraph-triangle"} {...others} />);
}

export default Component;
