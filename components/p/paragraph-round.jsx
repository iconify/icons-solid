import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k-t__0bsb.css';
import '../../css/g/g9hgzp-6e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="k-t__0bsb"/><circle class="g9hgzp-6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:paragraph-round"} {...others} />);
}

export default Component;
