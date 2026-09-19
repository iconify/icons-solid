import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fvtb_21_v.css';
import '../../css/w/wht39nbrx.css';
import '../../css/m/my85mgn3v.css';
import '../../css/w/wxrtcfo2g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJQWvOeAA"><g class="rohhhzb0l"><path class="fvtb_21_v"/><path class="wht39nbrx"/><circle class="my85mgn3v"/><path class="wxrtcfo2g"/></g></mask></defs><path mask="url(#SVGJQWvOeAA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-search-two"} {...others} />);
}

export default Component;
