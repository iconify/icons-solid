import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u4d5nhbqb.css';
import '../../css/a/afnfswcvd.css';
import '../../css/m/md3v46buq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="u4d5nhbqb"/><path class="afnfswcvd"/><path class="md3v46buq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:monkey-zodiac"} {...others} />);
}

export default Component;
