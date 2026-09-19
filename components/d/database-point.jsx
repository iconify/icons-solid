import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4hgz_bro.css';
import '../../css/p/pwykmoctr.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3ainfm1n.css';
import '../../css/p/pwi8uac1s.css';
import '../../css/q/qhjx3abbq.css';
import '../../css/p/pgwnw_zqj.css';
import '../../css/a/a8y4fl3xp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGPkUDccQz" class="i4hgz_bro"/><path id="SVGgm43gdlF" class="pwykmoctr"/><mask id="SVG0JzdOdOF"><g class="ft5dv1b6b"><path class="d3ainfm1n"/><path class="pwi8uac1s"/><path class="qhjx3abbq"/><path class="pgwnw_zqj"/><use href="#SVGPkUDccQz"/><use href="#SVGPkUDccQz"/><use href="#SVGgm43gdlF" class="a8y4fl3xp"/><use href="#SVGgm43gdlF" class="a8y4fl3xp"/></g></mask></defs><path mask="url(#SVG0JzdOdOF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:database-point"} {...others} />);
}

export default Component;
