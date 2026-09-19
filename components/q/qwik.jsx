import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovzl77bwj.css';
import '../../css/m/mf1r0nbce.css';
import '../../css/w/wz-tl9bco.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ovzl77bwj"/><path class="mf1r0nbce"/><path class="wz-tl9bco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:qwik"} {...others} />);
}

export default Component;
