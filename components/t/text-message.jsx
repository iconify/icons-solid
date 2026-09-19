import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/v/vtx7wn82i.css';
import '../../css/z/zsp_ecctg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnHaUEbHG"><g class="hv130ab-t"><path class="vtx7wn82i"/><path class="zsp_ecctg"/></g></mask></defs><path mask="url(#SVGnHaUEbHG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:text-message"} {...others} />);
}

export default Component;
