import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/shsp_xb_i.css';
import '../../css/g/g_tyo6jpk.css';
import '../../css/j/jgj6o_1pm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGEbzkgXO"><g class="rohhhzb0l"><path class="shsp_xb_i"/><path class="g_tyo6jpk"/><path class="jgj6o_1pm"/></g></mask></defs><path mask="url(#SVGGEbzkgXO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:facial-cleanser"} {...others} />);
}

export default Component;
