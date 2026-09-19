import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_56dznto.css';
import '../../css/o/od3ak_b5r.css';
import '../../css/u/uc2-vo5ym.css';
import '../../css/m/mva-gxb7b.css';
import '../../css/f/fg0c6vbcz.css';
import '../../css/c/ctui4lxfo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1CmE7bVZ"><g class="ft5dv1b6b"><path class="u_56dznto"/><rect class="od3ak_b5r"/><rect class="uc2-vo5ym"/><rect class="mva-gxb7b"/><rect class="fg0c6vbcz"/><path class="ctui4lxfo"/></g></mask></defs><path mask="url(#SVG1CmE7bVZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:memory-one"} {...others} />);
}

export default Component;
