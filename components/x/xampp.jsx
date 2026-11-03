import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8a4m0b2a.css';
import '../../css/h/hjzkjwhbs.css';
import '../../css/p/poazbeb6d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k8a4m0b2a"/><path class="hjzkjwhbs"/><path class="poazbeb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:xampp"} {...others} />);
}

export default Component;
