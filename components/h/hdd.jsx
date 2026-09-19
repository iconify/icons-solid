import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y4uljac_s.css';
import '../../css/r/rkvsoo0rz.css';
import '../../css/v/v9dcz1nxr.css';
import '../../css/i/i13dvsb0b.css';
import '../../css/l/l22r9rb_p.css';
import '../../css/c/cakzr8i_o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiQHOTpnn"><g class="ft5dv1b6b"><rect class="y4uljac_s"/><circle class="rkvsoo0rz"/><circle class="v9dcz1nxr"/><circle class="i13dvsb0b"/><circle class="l22r9rb_p"/><path class="cakzr8i_o"/></g></mask></defs><path mask="url(#SVGiQHOTpnn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hdd"} {...others} />);
}

export default Component;
