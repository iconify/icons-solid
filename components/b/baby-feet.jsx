import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unnjtjbec.css';
import '../../css/z/z53mltbgy.css';
import '../../css/l/l9_l5kbbl.css';
import '../../css/y/yn75icxpx.css';
import '../../css/n/n_b46ob9x.css';
import '../../css/f/fajm8su2c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3eMq6dZQ"><g class="ft5dv1b6b"><path class="unnjtjbec"/><ellipse transform="rotate(40 34.535 13.535)" class="z53mltbgy"/><ellipse transform="rotate(25 29.38 10.603)" class="l9_l5kbbl"/><ellipse transform="rotate(6 23.38 9.603)" class="yn75icxpx"/><ellipse transform="rotate(-20 14 8)" class="n_b46ob9x"/><ellipse transform="rotate(50 38.535 17.536)" class="fajm8su2c"/></g></mask></defs><path mask="url(#SVG3eMq6dZQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baby-feet"} {...others} />);
}

export default Component;
