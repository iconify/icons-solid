import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f67w_d5_u.css';
import '../../css/n/nbq6t4bru.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/y/yjkgmbcuu.css';
import '../../css/x/x-sjrbcab.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f67w_d5_u"/><path class="nbq6t4bru"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path clip-rule="evenodd" class="yjkgmbcuu"/><path class="x-sjrbcab"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:surprise-outline"} {...others} />);
}

export default Component;
