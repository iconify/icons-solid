import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx7xjjpbb.css';
import '../../css/x/xglsbv5ho.css';
import '../../css/r/rd9081bfx.css';
import '../../css/d/dpuk2valn.css';
import '../../css/s/s-kt60g0k.css';
import '../../css/s/s2s2rlb4n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yx7xjjpbb"/><path class="xglsbv5ho"/><path class="rd9081bfx"/><path class="dpuk2valn"/><path class="s-kt60g0k"/><path class="s2s2rlb4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:firebase-wordmark"} {...others} />);
}

export default Component;
