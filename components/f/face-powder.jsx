import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs47e-3br.css';
import '../../css/a/aoxakixux.css';
import '../../css/p/p40xy5_iy.css';
import '../../css/n/nhzfkpzbc.css';
import '../../css/f/foyse7bvu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUNxzzdQZ"><g class="ft5dv1b6b"><ellipse class="bs47e-3br"/><ellipse class="aoxakixux"/><path class="p40xy5_iy"/><path class="nhzfkpzbc"/><ellipse class="foyse7bvu"/></g></mask></defs><path mask="url(#SVGUNxzzdQZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:face-powder"} {...others} />);
}

export default Component;
