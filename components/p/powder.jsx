import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mksb8t-hh.css';
import '../../css/a/af8qmtb1l.css';
import '../../css/b/bkmld8qkk.css';
import '../../css/r/rzo1zc5om.css';
import '../../css/t/tigja08tt.css';
import '../../css/d/dckcm_4-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzE6i3cdf"><g class="ft5dv1b6b"><path class="mksb8t-hh"/><path class="af8qmtb1l"/><ellipse class="bkmld8qkk"/><path class="rzo1zc5om"/><ellipse class="tigja08tt"/><ellipse class="dckcm_4-u"/></g></mask></defs><path mask="url(#SVGzE6i3cdf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:powder"} {...others} />);
}

export default Component;
