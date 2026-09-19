import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/w-nbvvb-v.css';
import '../../css/x/xk_cgrbsu.css';
import '../../css/l/l5f1mno9z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRaKn9dXN"><g class="rohhhzb0l"><path class="w-nbvvb-v"/><circle class="xk_cgrbsu"/><circle class="l5f1mno9z"/></g></mask></defs><path mask="url(#SVGRaKn9dXN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:medal-one"} {...others} />);
}

export default Component;
