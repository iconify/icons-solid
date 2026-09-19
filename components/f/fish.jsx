import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woup13bgg.css';
import '../../css/s/scdda8sqr.css';
import '../../css/q/qt8553dci.css';
import '../../css/d/dkcwfxbnt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="woup13bgg"/><path class="scdda8sqr"/><path class="qt8553dci"/><path class="dkcwfxbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fish"} {...others} />);
}

export default Component;
