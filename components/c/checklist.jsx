import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k0ly7u-ku.css';
import '../../css/a/a7z-x8bxc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="k0ly7u-ku"/><path class="a7z-x8bxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:checklist"} {...others} />);
}

export default Component;
