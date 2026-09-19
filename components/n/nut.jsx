import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gl4r0j6jj.css';
import '../../css/r/rbyeil6uw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="gl4r0j6jj"/><path class="rbyeil6uw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:nut"} {...others} />);
}

export default Component;
