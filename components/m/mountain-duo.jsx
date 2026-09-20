import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1tr-fv7h.css';
import '../../css/o/o6ycr5b3f.css';
import '../../css/f/ffh-ppbpa.css';
import '../../css/o/opty9n_jo.css';
import '../../css/a/a6a1g9_ko.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="p1tr-fv7h"/><path class="o6ycr5b3f"/><path class="ffh-ppbpa"/><path class="opty9n_jo"/><path class="a6a1g9_ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:mountain-duo"} {...others} />);
}

export default Component;
