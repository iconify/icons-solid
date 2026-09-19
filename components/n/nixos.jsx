import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnrdxabwp.css';
import '../../css/v/vbp1sgblq.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="hnrdxabwp"/><path clip-rule="evenodd" class="vbp1sgblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nixos"} {...others} />);
}

export default Component;
