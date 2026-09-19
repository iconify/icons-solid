import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/h5f4lf-br.css';
import '../../css/t/tu9a_ubaw.css';
import '../../css/a/aiih0sb_n.css';
import '../../css/u/uurlglbre.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpDjUIbjP"><g class="wwvp95byt"><path class="h5f4lf-br"/><ellipse class="tu9a_ubaw"/><ellipse class="aiih0sb_n"/><path class="uurlglbre"/></g></mask></defs><path mask="url(#SVGpDjUIbjP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tire-swing"} {...others} />);
}

export default Component;
