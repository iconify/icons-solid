import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unnb5obww.css';
import '../../css/w/wybknb96j.css';
import '../../css/f/ff6avabmc.css';
import '../../css/n/nnqfly97l.css';
import '../../css/x/xc81b0btz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="unnb5obww"/><path class="wybknb96j"/><path class="ff6avabmc"/><path class="nnqfly97l"/><path class="xc81b0btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rocket"} {...others} />);
}

export default Component;
