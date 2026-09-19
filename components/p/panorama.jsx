import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9crkbcmi.css';
import '../../css/v/vywszeb-t.css';
import '../../css/d/d_5hd163w.css';
import '../../css/m/m-cozdbmp.css';
import '../../css/u/uxqvqub-g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m9crkbcmi"/><path class="vywszeb-t"/><path class="d_5hd163w"/><path class="m-cozdbmp"/><ellipse class="uxqvqub-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:panorama"} {...others} />);
}

export default Component;
