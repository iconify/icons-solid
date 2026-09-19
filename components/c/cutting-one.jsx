import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pbvvblbau.css';
import '../../css/k/kglso4bhq.css';
import '../../css/y/yjajdl9af.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkEkqgoJn"><g class="rohhhzb0l"><path class="pbvvblbau"/><path class="kglso4bhq"/><path class="yjajdl9af"/></g></mask></defs><path mask="url(#SVGkEkqgoJn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cutting-one"} {...others} />);
}

export default Component;
