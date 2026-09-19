import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chchrgbld.css';
import '../../css/h/hockizoar.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="chchrgbld"/><path class="hockizoar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:akka"} {...others} />);
}

export default Component;
