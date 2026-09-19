import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xk_cgrbsu.css';
import '../../css/v/vczvbtb_m.css';
import '../../css/l/lag9-94zr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWwSOVBSi"><g class="rohhhzb0l"><circle class="xk_cgrbsu"/><path class="vczvbtb_m"/><path class="lag9-94zr"/></g></mask></defs><path mask="url(#SVGWwSOVBSi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lock-one"} {...others} />);
}

export default Component;
