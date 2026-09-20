import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyhwt_bva.css';
import '../../css/s/si8rmjbtl.css';
import '../../css/x/x527ocb4j.css';
import '../../css/o/o5b9qje-s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gyhwt_bva"/><path class="si8rmjbtl"/><path class="x527ocb4j"/><path class="o5b9qje-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:block-bell-notification"} {...others} />);
}

export default Component;
