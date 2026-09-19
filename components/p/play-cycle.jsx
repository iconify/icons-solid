import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b32gsdbth.css';
import '../../css/i/iwqeqib9j.css';
import '../../css/n/neojpkb-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="b32gsdbth"/><path class="iwqeqib9j"/><path class="neojpkb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:play-cycle"} {...others} />);
}

export default Component;
