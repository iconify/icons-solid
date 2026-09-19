import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/muvtlrodu.css';
import '../../css/s/se2_uxbgg.css';
import '../../css/t/tecn4bbqc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFCr4OcVe"><g class="rohhhzb0l"><circle class="muvtlrodu"/><circle class="se2_uxbgg"/><path class="tecn4bbqc"/></g></mask></defs><path mask="url(#SVGFCr4OcVe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:doughnut"} {...others} />);
}

export default Component;
