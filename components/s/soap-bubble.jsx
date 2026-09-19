import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/b/bibhvib_i.css';
import '../../css/d/dny3ldrbk.css';
import '../../css/m/m5z_elexp.css';
import '../../css/z/z8oghbbab.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><ellipse class="bibhvib_i"/><path class="dny3ldrbk"/><circle class="m5z_elexp"/><circle class="z8oghbbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:soap-bubble"} {...others} />);
}

export default Component;
