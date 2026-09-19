import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jz--rmbcb.css';
import '../../css/m/mvadfabkx.css';
import '../../css/l/lq3-qpbeu.css';
import '../../css/m/m8de0q6nv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRYblmcyU"><g class="ufeehvblu"><rect class="jz--rmbcb"/><path class="mvadfabkx"/><path class="lq3-qpbeu"/><path class="m8de0q6nv"/></g></mask></defs><path mask="url(#SVGRYblmcyU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bank-transfer"} {...others} />);
}

export default Component;
