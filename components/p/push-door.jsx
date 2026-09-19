import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gopl26bnm.css';
import '../../css/q/q07j-7b5y.css';
import '../../css/m/mscbw7bhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGg2vuub6t"><g class="wwvp95byt"><path class="gopl26bnm"/><path class="q07j-7b5y"/><path class="mscbw7bhq"/></g></mask></defs><path mask="url(#SVGg2vuub6t)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:push-door"} {...others} />);
}

export default Component;
