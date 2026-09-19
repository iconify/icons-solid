import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n77u17bxl.css';
import '../../css/k/k885mybol.css';
import '../../css/n/n9z_vqbki.css';
import '../../css/a/a-li4fbcy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n77u17bxl"/><path class="k885mybol"/><path clip-rule="evenodd" class="n9z_vqbki"/><path class="a-li4fbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-bolt-duo"} {...others} />);
}

export default Component;
