import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/a/a-cxze6vh.css';
import '../../css/p/pd5bu6ihm.css';
import '../../css/k/k1ag-cgsk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3gF00bft"><g class="hv130ab-t"><path class="a-cxze6vh"/><path class="pd5bu6ihm"/><path class="k1ag-cgsk"/></g></mask></defs><path mask="url(#SVG3gF00bft)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:preschool"} {...others} />);
}

export default Component;
