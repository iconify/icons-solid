import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lrqwqdbew.css';
import '../../css/p/pd5_1mzss.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsd2ModqX"><g class="rohhhzb0l"><path class="lrqwqdbew"/><path class="pd5_1mzss"/><circle class="v_mrg_w2s"/></g></mask></defs><path mask="url(#SVGsd2ModqX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:seat"} {...others} />);
}

export default Component;
