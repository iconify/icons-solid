import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crhxvtukx.css';
import '../../css/m/m1mw2hbxc.css';
import '../../css/q/q7vfdtbpt.css';
import '../../css/z/z8l5u13up.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="crhxvtukx"/><path class="m1mw2hbxc"/><path class="q7vfdtbpt"/><path class="z8l5u13up"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:html5"} {...others} />);
}

export default Component;
