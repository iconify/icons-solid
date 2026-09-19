import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voi8a1ikb.css';
import '../../css/s/sy1oyztyz.css';
import '../../css/g/g7toxcbjz.css';
import '../../css/u/u-zkxtija.css';
import '../../css/u/urseeeotk.css';
import '../../css/y/y5sbplbnp.css';
import '../../css/x/x3us4qbfi.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cls-3 voi8a1ikb"/><path class="sy1oyztyz"/><path class="cls-1 g7toxcbjz"/><path class="cls-4 u-zkxtija"/><path class="cls-5 urseeeotk"/><path class="cls-2 y5sbplbnp"/><path class="x3us4qbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:babylonjs-wordmark"} {...others} />);
}

export default Component;
