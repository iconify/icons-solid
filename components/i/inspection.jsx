import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/srhbvgbaj.css';
import '../../css/t/tgf1jxbcb.css';
import '../../css/h/hu_nuxbxh.css';
import '../../css/j/ji28aoo3n.css';
import '../../css/p/p0km8_bsw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIEWwZdlK"><g class="rohhhzb0l"><path class="srhbvgbaj"/><path class="tgf1jxbcb"/><path class="hu_nuxbxh"/><circle class="ji28aoo3n"/><path class="p0km8_bsw"/></g></mask></defs><path mask="url(#SVGIEWwZdlK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:inspection"} {...others} />);
}

export default Component;
