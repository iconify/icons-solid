import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zxj671btt.css';
import '../../css/p/pypazzbsz.css';
import '../../css/m/mscbw7bhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtktsNdgU"><g class="wwvp95byt"><path class="zxj671btt"/><path class="pypazzbsz"/><path class="mscbw7bhq"/></g></mask></defs><path mask="url(#SVGtktsNdgU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pull-door"} {...others} />);
}

export default Component;
