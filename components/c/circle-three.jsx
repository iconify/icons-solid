import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aqezq3b2u.css';
import '../../css/s/szxfm0qew.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="aqezq3b2u"/><path clip-rule="evenodd" class="szxfm0qew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:circle-three"} {...others} />);
}

export default Component;
