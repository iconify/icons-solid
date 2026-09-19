import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8rpadpnu.css';
import '../../css/l/la2xe_bme.css';
import '../../css/w/wkl_labxn.css';
import '../../css/u/uyve4wbpr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAPhOHbkU"><g class="ft5dv1b6b"><rect class="r8rpadpnu"/><path class="la2xe_bme"/><rect class="wkl_labxn"/><path class="uyve4wbpr"/></g></mask></defs><path mask="url(#SVGAPhOHbkU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:router"} {...others} />);
}

export default Component;
