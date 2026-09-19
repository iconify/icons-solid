import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac4r5ub6d.css';
import '../../css/l/lwgbjb0jl.css';
import '../../css/f/fjpj-53lj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ac4r5ub6d"/><path class="lwgbjb0jl"/><path class="fjpj-53lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-shell"} {...others} />);
}

export default Component;
