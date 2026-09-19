import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/ssnzky-qs.css';
import '../../css/s/sns6jubpm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ssnzky-qs"/><path clip-rule="evenodd" class="sns6jubpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:damage-map"} {...others} />);
}

export default Component;
