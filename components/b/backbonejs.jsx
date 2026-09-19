import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb3dx9ovg.css';
import '../../css/o/o68ncmbqz.css';
import '../../css/u/uw85bc0ix.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xb3dx9ovg"/><path class="o68ncmbqz"/><path class="uw85bc0ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:backbonejs"} {...others} />);
}

export default Component;
