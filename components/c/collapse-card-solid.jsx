import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpf2v5gyu.css';
import '../../css/m/mdp5ddq7n.css';
import '../../css/e/eirurobfw.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<rect class="clr-i-solid clr-i-solid-path-1 qpf2v5gyu"/><path class="clr-i-solid clr-i-solid-path-2 mdp5ddq7n"/><path class="clr-i-solid clr-i-solid-path-3 eirurobfw"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:collapse-card-solid"} {...others} />);
}

export default Component;
