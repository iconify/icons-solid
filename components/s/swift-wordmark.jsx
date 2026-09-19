import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce4x6tx7w.css';
import '../../css/w/w0za-obmf.css';
import '../../css/t/tgr0ac0hb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ce4x6tx7w"/><path class="w0za-obmf"/><path class="tgr0ac0hb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:swift-wordmark"} {...others} />);
}

export default Component;
