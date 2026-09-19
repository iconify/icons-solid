import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/f/foljgfbwk.css';
import '../../css/w/wl94-076k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpf7aNbIL"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="foljgfbwk"/><rect class="wl94-076k"/></g></mask></defs><path mask="url(#SVGpf7aNbIL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:dizzy-face"} {...others} />);
}

export default Component;
